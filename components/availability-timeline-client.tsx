"use client"

import { useEffect, useMemo, useState } from "react"
import Papa from "papaparse"

type MonthStatus = "free" | "hold" | "booked"
type Availability = { year: number; month: number; status: MonthStatus }

function rollingTwelveMonths(): { label: string; year: number; month: number }[] {
  const out: { label: string; year: number; month: number }[] = []
  const start = new Date()
  start.setDate(1)
  for (let i = 0; i < 12; i++) {
    const d = new Date(start.getFullYear(), start.getMonth() + i, 1)
    out.push({ label: d.toLocaleString(undefined, { month: "short" }), year: d.getFullYear(), month: d.getMonth() })
  }
  return out
}

function monthStartEnd(d: Date) {
  const start = new Date(d.getFullYear(), d.getMonth(), 1)
  const end = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999)
  return { start, end }
}

function detectDateField(obj: Record<string, any>, candidates: string[]): Date | null {
  for (const key of Object.keys(obj)) {
    const lower = key.trim().toLowerCase()
    if (candidates.includes(lower)) {
      const v = obj[key]
      if (!v) continue
      const parsed = new Date(v)
      if (!isNaN(parsed.getTime())) return parsed
    }
  }
  return null
}

function normalizeRows(rows: Record<string, any>[]) {
  const startKeys = [
    "start",
    "start date",
    "start_date",
    "from",
    "begin",
    "begin date",
    "desired start",
    "desired start month",
    "start month",
  ]
  const endKeys = [
    "end",
    "end date",
    "end_date",
    "to",
    "finish",
    "finish date",
    "desired end",
    "desired end month",
    "end month",
  ]
  const statusKeys = ["status", "type", "booking status"]

  return rows
    .map((r) => {
      const start = detectDateField(r, startKeys)
      const end = detectDateField(r, endKeys)
      let status: MonthStatus | undefined
      for (const key of Object.keys(r)) {
        const lower = key.trim().toLowerCase()
        if (statusKeys.includes(lower)) {
          const v = String(r[key]).trim().toLowerCase()
          if (v === "booked") status = "booked"
          else if (v === "hold" || v === "tentative" || v === "tentative hold") status = "hold"
        }
      }
      return { start, end, status }
    })
    .filter((x) => x.start && x.end) as { start: Date; end: Date; status?: MonthStatus }[]
}

function computeAvailability(rows: { start: Date; end: Date; status?: MonthStatus }[]): Availability[] {
  const months = rollingTwelveMonths()
  const out: Availability[] = []
  for (const m of months) {
    const { start, end } = monthStartEnd(new Date(m.year, m.month, 1))
    let weight = 0
    for (const r of rows) {
      if (r.start <= end && r.end >= start) weight += r.status === "booked" ? 2 : 1
    }
    const status: MonthStatus = weight === 0 ? "free" : weight >= 2 ? "booked" : "hold"
    out.push({ year: m.year, month: m.month, status })
  }
  return out
}

function parseCSV(text: string): Record<string, any>[] {
  const parsed = Papa.parse(text, { header: true, skipEmptyLines: true })
  return (parsed.data as any[]) ?? []
}

function statusFor(year: number, month: number, availability: Availability[]): MonthStatus {
  return availability.find((m) => m.year === year && m.month === month)?.status ?? "free"
}

export default function AvailabilityTimelineClient({ sheetUrl }: { sheetUrl: string }) {
  const months = useMemo(() => rollingTwelveMonths(), [])
  const [availability, setAvailability] = useState<Availability[]>(() =>
    months.map((m) => ({ year: m.year, month: m.month, status: "free" }))
  )

  useEffect(() => {
    let cancelled = false
    async function run() {
      try {
        const res = await fetch(sheetUrl, { cache: "no-store" })
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
        const text = await res.text()
        const rows = parseCSV(text)
        const normalized = normalizeRows(rows)
        const avail = computeAvailability(normalized)
        if (!cancelled) {
          setAvailability(avail)
        }
      } catch (e: any) {
        if (!cancelled) {
          console.error("Availability timeline failed to load:", e)
        }
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [sheetUrl])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {months.map((m, idx) => {
          const st = statusFor(m.year, m.month, availability)
          const styles =
            st === "free"
              ? "bg-[var(--light-green)] text-black"
              : st === "hold"
              ? "bg-gray-200 text-black"
              : "bg-[var(--black)] text-white"
          return (
            <div key={idx} className={`rounded-lg border border-black p-3 flex items-center justify-between ${styles}`}>
              <div className="font-medium">{m.label}</div>
              <div className="text-xs opacity-80">{m.year}</div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded bg-[var(--light-green)] border border-black" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded bg-gray-200 border border-black" />
          Tentative Hold
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded bg-[var(--black)] border border-black" />
          Booked
        </span>
      </div>
    </div>
  )
}
