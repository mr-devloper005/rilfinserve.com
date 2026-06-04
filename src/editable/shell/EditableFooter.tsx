'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Facebook, Linkedin, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#ffffff', '--editable-footer-text': '#11142f', '--editable-border': 'rgba(17,20,47,0.10)', '--editable-container': '1180px' } as CSSProperties
  const listingTask = SITE_CONFIG.tasks.find((task) => task.enabled && task.key === 'listing')
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr_0.9fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="text-2xl font-black tracking-[-0.06em]">{globalContent.site.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-black">For Customers</h3>
          <div className="mt-4 grid gap-2">
            {listingTask ? (
              <Link href={listingTask.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                Find a Professional <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ) : null}
            <Link href="/search" className="text-sm font-bold opacity-75 hover:opacity-100">Search services</Link>
            <Link href="/about" className="text-sm font-bold opacity-75 hover:opacity-100">How it works</Link>
            <Link href="/login" className="text-sm font-bold opacity-75 hover:opacity-100">Login</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black">For Professionals</h3>
          <div className="mt-4 grid gap-2">
            <Link href="/create" className="text-sm font-bold opacity-75 hover:opacity-100">Create listing</Link>
            <Link href="/signup" className="text-sm font-bold opacity-75 hover:opacity-100">Join as a professional</Link>
            <Link href="/contact" className="text-sm font-bold opacity-75 hover:opacity-100">Help centre</Link>
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout {session.name}</button> : null}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black">Need help?</h3>
          <Link href="/contact" className="mt-4 inline-flex rounded-md bg-[#3f6ff2] px-5 py-3 text-sm font-black text-white shadow-[0_8px_18px_rgba(63,111,242,0.24)]">Contact us</Link>
          <div className="mt-5 flex gap-4 text-[#11142f]">
            
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        (c) {year} {globalContent.site.name}. Business listing directory. All rights reserved.
      </div>
    </footer>
  )
}
