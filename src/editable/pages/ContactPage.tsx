'use client'

import { Building2, LifeBuoy, MapPin, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: Building2, title: 'Business onboarding', body: 'Add a new profile, improve listing details, or ask what information helps customers compare you.' },
  { icon: ShieldCheck, title: 'Listing updates', body: 'Request corrections for service categories, contact information, website links, or profile descriptions.' },
  { icon: MapPin, title: 'Coverage and categories', body: 'Suggest a new location, service category, or directory lane for your local market.' },
  { icon: LifeBuoy, title: 'Customer support', body: 'Need help finding a provider or reporting a business profile? Send the details here.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fbfcff] text-[#11142f]">
        <section className="mx-auto grid max-w-[1180px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#3f6ff2]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#606783]">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-md border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5 text-[#3f6ff2]" />
                  <h2 className="mt-3 text-lg font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#606783]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-[var(--editable-border)] bg-white p-6 shadow-[0_18px_48px_rgba(17,20,47,0.08)] sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.03em]">{pagesContent.contact.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[#606783]">Form text uses strong contrast so every field remains readable while you type.</p>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
