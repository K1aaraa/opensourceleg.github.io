import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileText,
  Globe,
  HelpCircle,
  Package,
  Shield,
  Truck,
  Users,
  Wrench,
} from "lucide-react"

export const metadata = {
  title: "Lending Program – Open-Source Leg",
  description:
    "Borrow a fully built Open-Source Leg (OSL) for your research. Pilot lending, training, and support designed for labs, courses, and collaborative projects.",
}

function PendingPill({ label = "Pending" }: { label?: string }) {
  return (
    <Badge variant="outline" className="border-black text-black bg-white">
      {label}
    </Badge>
  )
}

export default function LendingProgram() {
  return (
    <div className="min-h-screen pt-12">
      {/* HERO */}
      <PageHero
        title={
          <>
            OSL <span className="font-bold italic">Lending Program</span>
          </>
        }
        description="Borrow a fully assembled Open-Source Leg for short-term research, teaching, or pilot studies — shipped, supported, and ready to run."
        primaryButton={{
          href: "#apply",
          text: "Apply to Borrow",
          icon: <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />,
        }}
        secondaryButton={{
          href: "#interest",
          text: "Join Interest List",
          icon: <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />,
        }}
      />

      {/* PENDING STRIP (kept up front) */}
      <div className="bg-[var(--light-green)] py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="text-sm sm:text-base font-medium">Program details in progress:</div>
          <div className="flex flex-wrap gap-2">
            <PendingPill label="Pricing & Deposits" />
            <PendingPill label="Availability Calendar" />
            <PendingPill label="Loan Agreement" />
            <PendingPill label="Eligibility Tiers" />
            <PendingPill label="Safety & Training Checklist" />
            <PendingPill label="Insurance / Liability" />
          </div>
        </div>
      </div>

      {/* SNAPSHOT / KEY FACTS */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" /> What you get
              </CardTitle>
              <CardDescription>Turn-key OSL hardware + batteries + charger + software image</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <ul className="list-disc ml-4 space-y-2">
                <li>Assembled knee/ankle unit(s) in flight case</li>
                <li>Raspberry Pi image w/ opensourceleg SDK</li>
                <li>Starter scripts & example controllers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" /> Loan window
              </CardTitle>
              <CardDescription>Short-term research blocks</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <ul className="list-disc ml-4 space-y-2">
                <li>Typical: 4–8 weeks (extensions case-by-case)</li>
                <li>Lead time for shipping & onboarding</li>
                <li>Priority for active research projects</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" /> Readiness & safety
              </CardTitle>
              <CardDescription>Training and checks before ship</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <ul className="list-disc ml-4 space-y-2">
                <li>Remote onboarding session</li>
                <li>Bench tests & verification logs</li>
                <li>Human-subject use requires local IRB approval</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              How it <span className="relative font-medium italic">Works
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-blue)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              A simple researcher-friendly flow from request to return. Similar to university equipment loan pools and lab tool libraries, we use a short application, a
              loan agreement, a refundable deposit, and structured onboarding.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ClipboardList className="w-5 h-5" /> 1) Request</CardTitle>
                <CardDescription>Project + timeline</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Share goals, environment (bench/human subject), dates, and team experience.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5" /> 2) Review</CardTitle>
                <CardDescription>Safety & readiness</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                We confirm training needs, IRB (if human use), and allocate an available unit.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> 3) Agreement</CardTitle>
                <CardDescription>Deposit + terms</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Sign loan agreement, place refundable deposit, and schedule onboarding.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Truck className="w-5 h-5" /> 4) Ship & Support</CardTitle>
                <CardDescription>Use & return</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                We ship in a padded case; you run tests with our remote support, then ship back.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              What’s <span className="relative font-medium italic">Included
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-green)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <div className="bg-white rounded-2xl border border-black overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-gray-900">Item</TableHead>
                    <TableHead className="font-semibold text-gray-900">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>OSL knee/ankle assembly</TableCell>
                    <TableCell>Pre-tested, configured drivetrain</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Batteries + charger</TableCell>
                    <TableCell>Transport-compliant packaging</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Raspberry Pi image</TableCell>
                    <TableCell>Robot CI-built image, opensourceleg SDK</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Starter code & examples</TableCell>
                    <TableCell>Bench demos, safety interlocks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Flight case + cables</TableCell>
                    <TableCell>Return shipping labels provided</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Not a clinical device. Human-subject testing requires local approvals and supervision.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border-2 border-black">
            <Image src="/hardware.webp" alt="OSL flight case and hardware" width={1200} height={900} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & PRIORITIZATION */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Eligibility & <span className="relative font-medium italic">Prioritization
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-blue)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><Users className="w-4 h-4 mt-1" /> University labs, instructors, and independent research groups</li>
              <li className="flex items-start gap-2"><Wrench className="w-4 h-4 mt-1" /> Demonstrated bench safety & basic robotics tooling</li>
              <li className="flex items-start gap-2"><FileText className="w-4 h-4 mt-1" /> IRB approval if involving human participants</li>
              <li className="flex items-start gap-2"><Globe className="w-4 h-4 mt-1" /> International shipping possible (customs/regs apply)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">How others do it (informing our model)</h4>
            <p className="text-gray-700">
              Many research equipment lending programs (e.g., university tool libraries, shared instrumentation cores, and hardware developer loan programs)
              rely on a short application, a refundable deposit or damage waiver, scheduled loan windows, and required onboarding. We follow similar principles:
              clear eligibility, safety training, accountability via agreement/deposit, and active support throughout the loan.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING & TERMS (PENDING CONTENT WITH GUIDANCE) */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              Pricing & <span className="relative font-medium italic">Terms
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-green)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <PendingPill />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> Deposit</CardTitle>
                <CardDescription>Refundable</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Typical model: refundable deposit to cover loss/damage; returned after inspection.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CalendarDays className="w-5 h-5" /> Weekly fee</CardTitle>
                <CardDescription>TBD</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Many programs use a modest weekly fee to cover wear, QA, and shipping overhead.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Truck className="w-5 h-5" /> Shipping</CardTitle>
                <CardDescription>Actual cost</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Outbound & return shipping billed at cost; flight case provided; customs/insurance as needed.
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-gray-500 mt-4">Exact amounts to be published with the pilot cohort.</p>
        </div>
      </section>

      {/* AVAILABILITY (PENDING CALENDAR) */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              Availability <span className="relative font-medium italic">Calendar
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-blue)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <PendingPill />
          </div>
          <div className="rounded-xl border border-black p-6 bg-white text-sm text-gray-700">
            We’re finalizing unit scheduling. A public calendar with request holds and confirmed loans will appear here.
          </div>
        </div>
      </section>

      {/* SUPPORT & TRAINING */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Support & <span className="relative font-medium italic">Training
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-green)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><Wrench className="w-4 h-4 mt-1" /> Required remote onboarding (setup, safety, run-through)</li>
              <li className="flex items-start gap-2"><HelpCircle className="w-4 h-4 mt-1" /> Forum access for Q&A and community tips</li>
              <li className="flex items-start gap-2"><FileText className="w-4 h-4 mt-1" /> Tutorials & docs: assembly, SDK, Robot CI</li>
              <li className="flex items-start gap-2"><Shield className="w-4 h-4 mt-1" /> Checklists for bench tests and shut-down</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Button href="/hardware/tutorials" className="bg-[var(--black)] text-white border hover:bg-[var(--light-blue)] hover:text-black">
                Tutorials <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="https://neurobionics.github.io/opensourceleg/" target="_blank" rel="noopener noreferrer" variant="outline" className="text-black border-black hover:bg-[var(--light-green)]">
                Documentation <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="https://opensourceleg.discourse.group/" target="_blank" rel="noopener noreferrer" variant="outline" className="text-black border-black hover:bg-[var(--light-green)]">
                Forum <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border-2 border-black">
            <Image src="/software.png" alt="OSL software and SDK support" width={1100} height={800} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* APPLY / INTEREST */}
      <section id="apply" className="py-16 px-4 sm:px-6 bg-[var(--light-blue)]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-light">
            Apply to <span className="relative font-medium italic">Borrow
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-green)" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto mt-4">
            Tell us about your project, dates, and team. We’ll review, confirm readiness, and schedule a unit.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            {/* Replace # with your form URL when ready */}
            <Button href="#" target="_blank" className="bg-white text-[var(--light-blue)] border border-white hover:bg-[var(--light-green)] hover:text-black">
              Open Application Form <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="mailto:opensourceleg@gmail.com?subject=OSL%20Lending%20Inquiry" variant="outline" className="bg-transparent text-white border-white hover:bg-[var(--light-green)] hover:text-black">
              Email the Team <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div id="interest" className="mt-8 text-sm text-white/80">
            Not ready yet? <a href="#" className="underline underline-offset-4">Join the interest list</a> to get pilot updates.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6">
            Frequently <span className="relative font-medium italic">Asked
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-blue)" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span> Questions
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <Card>
              <CardHeader>
                <CardTitle>Can students apply?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Yes—applications from student teams are welcome with a faculty advisor and a clear safety plan.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Human-subject testing?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Allowed only with local IRB approval and qualified supervision. We provide device-level safety checklists; your team is responsible for protocol compliance.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can we modify the hardware?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Non-destructive changes (e.g., sensors, external fixtures) are fine if documented and reversible. Contact us first for anything invasive.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What happens if it breaks?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Pause use and contact us immediately. We’ll triage remotely; repairs follow the agreement (spares, parts, or insurance may apply).
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              Share your <span className="relative font-medium italic">Results
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C60 6 140 6 198 8" stroke="var(--light-green)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <p className="text-gray-700">
              Publish your findings, add your paper to our research page, and swap controllers or experiment configs with the community.
            </p>
            <div className="flex gap-3">
              <Button href="/research" className="bg-[var(--black)] text-white border hover:bg-[var(--light-blue)] hover:text-black">
                Research & Publications <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="https://opensourceleg.discourse.group/" target="_blank" rel="noopener noreferrer" variant="outline" className="text-black border-black hover:bg-[var(--light-green)]">
                Join Forum <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border-2 border-black">
            <Image src="/community/iros.webp" alt="OSL community" width={1200} height={900} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
