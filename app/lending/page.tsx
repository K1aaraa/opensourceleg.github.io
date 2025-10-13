import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Inbox,
  Library,
  LineChart,
  MessageSquare,
  Package,
  ShieldCheck,
  Users
} from "lucide-react"

const programDetailsInProgress = [
  "Pricing & Deposits",
  "Availability Calendar",
  "Loan Agreement",
  "Eligibility Tiers",
  "Safety & Training Checklist",
  "Insurance / Liability"
]

const whatYouGetItems = [
  {
    name: "Turn-key OSL hardware + batteries + charger + software image",
    notes: "Shipped in padded flight case and ready to boot"
  },
  {
    name: "Assembled knee/ankle unit(s) in flight case",
    notes: "Pre-tested drivetrain with protective foam"
  },
  {
    name: "Raspberry Pi image w/ opensourceleg SDK",
    notes: "Robot CI-built image for fast deployment"
  },
  {
    name: "Starter scripts & example controllers",
    notes: "Bench demos plus safety interlocks"
  }
]

const loanWindowDetails = [
  {
    title: "Loan window",
    description: "Short-term research blocks with typical access of 4–8 weeks (extensions case-by-case)."
  },
  {
    title: "Lead time for shipping & onboarding",
    description: "Priority given to active research projects so we coordinate timelines for training and delivery."
  }
]

const readinessSafetyChecks = [
  "Training and checks before ship",
  "Remote onboarding session",
  "Bench tests & verification logs",
  "Human-subject use requires local IRB approval"
]

const howItWorksSteps = [
  {
    title: "Request",
    subtitle: "Project + timeline",
    description:
      "Share goals, environment (bench/human subject), dates, and team experience so we can match you with an available unit.",
    icon: ClipboardList
  },
  {
    title: "Review",
    subtitle: "Safety & readiness",
    description:
      "We confirm training needs, IRB (if human use), and allocate an available unit while checking in on any lab requirements.",
    icon: ShieldCheck
  },
  {
    title: "Agreement",
    subtitle: "Deposit + terms",
    description:
      "Sign the loan agreement, place a refundable deposit, and schedule onboarding tailored to your planned experiments.",
    icon: FileText
  },
  {
    title: "Ship & Support",
    subtitle: "Use & return",
    description:
      "We ship in a padded case, support you remotely during testing, then coordinate the return shipment when your window wraps.",
    icon: Package
  }
]

const includedTable = [
  {
    item: "OSL knee/ankle assembly",
    notes: "Pre-tested, configured drivetrain"
  },
  {
    item: "Batteries + charger",
    notes: "Transport-compliant packaging"
  },
  {
    item: "Raspberry Pi image",
    notes: "Robot CI-built image, opensourceleg SDK"
  },
  {
    item: "Starter code & examples",
    notes: "Bench demos, safety interlocks"
  },
  {
    item: "Flight case + cables",
    notes: "Return shipping labels provided"
  }
]

const eligibilityPoints = [
  "University labs, instructors, and independent research groups",
  "Demonstrated bench safety & basic robotics tooling",
  "IRB approval if involving human participants",
  "International shipping possible (customs/regs apply)"
]

const pricingTerms = [
  {
    title: "Deposit",
    status: "Refundable",
    description:
      "Typical model: refundable deposit to cover loss/damage; returned after inspection."
  },
  {
    title: "Weekly fee",
    status: "TBD",
    description:
      "Many programs use a modest weekly fee to cover wear, QA, and shipping overhead."
  },
  {
    title: "Shipping",
    status: "Actual cost",
    description:
      "Outbound & return shipping billed at cost; flight case provided; customs/insurance as needed."
  }
]

const availabilitySlots = [
  {
    period: "June 2024",
    status: "Hold requested",
    notes: "Awaiting agreement signature"
  },
  {
    period: "July 2024",
    status: "Available",
    notes: "Open for bench-only pilots"
  },
  {
    period: "August 2024",
    status: "In review",
    notes: "Human-subject study under IRB consideration"
  }
]

const supportResources = [
  "Required remote onboarding (setup, safety, run-through)",
  "Forum access for Q&A and community tips",
  "Tutorials & docs: assembly, SDK, Robot CI",
  "Checklists for bench tests and shut-down"
]

const faqItems = [
  {
    question: "Can students apply?",
    answer:
      "Yes—applications from student teams are welcome with a faculty advisor and a clear safety plan."
  },
  {
    question: "Human-subject testing?",
    answer:
      "Allowed only with local IRB approval and qualified supervision. We provide device-level safety checklists; your team is responsible for protocol compliance."
  },
  {
    question: "Can we modify the hardware?",
    answer:
      "Non-destructive changes (e.g., sensors, external fixtures) are fine if documented and reversible. Contact us first for anything invasive."
  },
  {
    question: "What happens if it breaks?",
    answer:
      "Pause use and contact us immediately. We’ll triage remotely; repairs follow the agreement (spares, parts, or insurance may apply)."
  }
]

const applicationLink = "https://forms.gle/YN2MMG9MqtBvgnF86"
const interestListEmail = "mailto:opensourceleg@gmail.com?subject=OSL%20Lending%20Program%20Interest%20List"
const availabilityLastUpdated = "April 2024"

export default function LendingPage() {
  return (
    <div className="min-h-screen pt-12">
      <PageHero
        title={
          <>
            <span className="font-semibold">OSL</span> Lending Program
          </>
        }
        description="Borrow a fully assembled Open-Source Leg for short-term research, teaching, or pilot studies — shipped, supported, and ready to run."
        primaryButton={{
          href: "#apply",
          text: "Apply to Borrow",
          icon: <ArrowRight className="h-4 w-4" />
        }}
        secondaryButton={{
          href: "#interest",
          text: "Join Interest List",
          icon: <Users className="h-4 w-4" />
        }}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 bg-[var(--light-blue)]/10">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Program details <span className="italic">in progress</span>
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            We’re finalizing the documentation that supports the pilot cohort. Expect transparent policies and downloadable references for:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {programDetailsInProgress.map((item) => (
              <Card key={item} className="border-black/5 bg-white">
                <CardHeader className="flex flex-row items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--light-blue)]" />
                  <CardTitle className="text-base font-semibold text-gray-900">{item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
              What you get
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              Turn-key OSL hardware arrives assembled, instrumented, and loaded with the software image so you can focus on your experiments from day one.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 text-left">Item</TableHead>
                  <TableHead className="text-left">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {whatYouGetItems.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium text-gray-900">{item.name}</TableCell>
                    <TableCell className="text-gray-600">{item.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="rounded-3xl bg-[var(--light-blue)]/10 p-6 text-sm text-gray-700">
              Not a clinical device. Human-subject testing requires local approvals and supervision.
            </div>
          </div>

          <aside className="flex-1 space-y-6">
            <Card className="border-black/5">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Loan logistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm text-gray-600">
                {loanWindowDetails.map((detail) => (
                  <div key={detail.title}>
                    <p className="font-semibold text-gray-900">{detail.title}</p>
                    <p>{detail.description}</p>
                  </div>
                ))}
                <div>
                  <p className="font-semibold text-gray-900">Priority for active research projects</p>
                  <p>
                    Tell us about your milestones so we can coordinate shipment, onboarding, and return without interrupting your timeline.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-black/5">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Readiness &amp; safety
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {readinessSafetyChecks.map((check) => (
                  <div key={check} className="flex items-start gap-3 text-sm text-gray-700">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-[var(--light-green)]" />
                    <span>{check}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--black)] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-light sm:text-4xl">
                How it works
              </h2>
              <p className="text-white/80">
                A simple researcher-friendly flow from request to return. Similar to university equipment loan pools and lab tool libraries, we use a short application, a loan agreement, a refundable deposit, and structured onboarding.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 text-sm text-white/80">
              <p className="font-semibold text-white">OSL flight case and hardware</p>
              <p>
                Each shipment includes protective foam, return labels, and setup documentation so your lab can start safely and ship back confidently.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="border-white/10 bg-white/5 text-left backdrop-blur">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--light-green)] text-black">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-white">
                        {index + 1}) {step.title}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {step.subtitle}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/80">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            What’s included
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3 text-left">Item</TableHead>
                <TableHead className="text-left">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {includedTable.map((row) => (
                <TableRow key={row.item}>
                  <TableCell className="font-medium text-gray-900">{row.item}</TableCell>
                  <TableCell className="text-gray-600">{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="bg-[var(--light-green)]/20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
              Eligibility &amp; prioritization
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              We focus on labs and instructors who can operate safely and contribute feedback back to the community.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              {eligibilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Users className="mt-0.5 h-4 w-4 text-[var(--light-blue)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-3xl bg-white p-6 text-sm text-gray-700 shadow-sm">
              <p className="font-semibold text-gray-900">How others do it (informing our model)</p>
              <p>
                Many research equipment lending programs (e.g., university tool libraries, shared instrumentation cores, and hardware developer loan programs) rely on a short application, a refundable deposit or damage waiver, scheduled loan windows, and required onboarding. We follow similar principles: clear eligibility, safety training, accountability via agreement/deposit, and active support throughout the loan.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="border-black/5">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Pricing &amp; terms
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  Pending details are being finalized with the pilot cohort.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {pricingTerms.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs uppercase tracking-wide text-gray-500">{item.status}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
                <p className="text-xs text-gray-500">
                  Exact amounts to be published with the pilot cohort.
                </p>
              </CardContent>
            </Card>
            <Card className="border-black/5">
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Availability calendar
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    Last updated {availabilityLastUpdated}. Update the schedule by editing the availabilitySlots array in this file.
                  </CardDescription>
                </div>
                <CalendarDays className="h-8 w-8 text-[var(--light-blue)]" />
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-700">
                {availabilitySlots.map((slot) => (
                  <div key={slot.period} className="rounded-2xl border border-black/5 bg-white p-4">
                    <p className="font-semibold text-gray-900">{slot.period}</p>
                    <p className="text-xs uppercase tracking-wide text-[var(--light-blue)]">{slot.status}</p>
                    <p>{slot.notes}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Support &amp; training
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-black/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <MessageSquare className="h-5 w-5 text-[var(--light-blue)]" />
                  Lending support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700">
                {supportResources.map((resource) => (
                  <div key={resource} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--light-green)]" />
                    <span>{resource}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-black/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Library className="h-5 w-5 text-[var(--light-blue)]" />
                  Learning hub
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  Dive deeper into tutorials, documentation, and the community forum.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  href="/software"
                  className="justify-start gap-2 border-black text-black"
                >
                  <LineChart className="h-4 w-4" />
                  Tutorials
                </Button>
                <Button
                  variant="outline"
                  href="https://docs.opensourceleg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="justify-start gap-2 border-black text-black"
                >
                  <ClipboardList className="h-4 w-4" />
                  Documentation
                </Button>
                <Button
                  variant="outline"
                  href="https://forum.opensourceleg.com"
                  target="_blank"
                  rel="noreferrer"
                  className="justify-start gap-2 border-black text-black"
                >
                  <MessageSquare className="h-4 w-4" />
                  Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[var(--light-blue)]/10 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Apply to Borrow
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Tell us about your project, dates, and team. We’ll review, confirm readiness, and schedule a unit.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={applicationLink}
              target="_blank"
              className="flex items-center gap-2 rounded-lg border border-black bg-[var(--light-green)] px-6 py-6 text-base text-black hover:bg-[var(--light-blue)]"
            >
              <ClipboardList className="h-5 w-5" />
              Open Application Form
            </Button>
            <Button
              variant="outline"
              href="mailto:opensourceleg@gmail.com"
              target="_blank"
              className="flex items-center gap-2 rounded-lg border-black px-6 py-6 text-base text-black hover:bg-[var(--light-blue)]"
            >
              <MessageSquare className="h-5 w-5" />
              Email the Team
            </Button>
          </div>
        </div>
      </section>

      <section id="interest" className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Not ready yet?
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Join the interest list to get pilot updates and be the first to know when new loan windows open.
          </p>
          <Button
            href={interestListEmail}
            className="mx-auto flex items-center gap-2 rounded-lg border border-black bg-white px-6 py-6 text-base text-black hover:bg-[var(--light-green)]"
          >
            <Inbox className="h-5 w-5" />
            Join Interest List
          </Button>
        </div>
      </section>

      <section className="bg-[var(--black)] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="text-3xl font-light sm:text-4xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <AccordionTrigger className="px-6 text-left text-base font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-sm text-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">Share your results</h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Publish your findings, add your paper to our research page, and swap controllers or experiment configs with the community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/research"
              className="flex items-center gap-2 rounded-lg border border-black bg-[var(--light-blue)] px-6 py-6 text-base text-black hover:bg-[var(--light-green)]"
            >
              <FileText className="h-5 w-5" />
              Research &amp; Publications
            </Button>
            <Button
              variant="outline"
              href="https://forum.opensourceleg.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border-black px-6 py-6 text-base text-black hover:bg-[var(--light-blue)]"
            >
              <MessageSquare className="h-5 w-5" />
              Join Forum
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
