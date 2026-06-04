'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, LogIn, Menu, PlusCircle, Search, UserCircle2, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name
  const navVars = { '--editable-nav-bg': '#ffffff', '--editable-nav-text': '#11142f', '--editable-nav-active': '#eef3ff', '--editable-nav-active-text': '#315fe7', '--editable-cta-bg': '#3f6ff2', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff', '--editable-border': 'rgba(17,20,47,0.10)', '--editable-container': '1180px', '--editable-page-bg': '#ffffff', '--editable-page-text': '#11142f' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 text-[var(--editable-nav-text)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[74px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="text-3xl font-black leading-none tracking-[-0.06em] text-[#11142f]">{brandName}</span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-[320px] items-center rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-2.5">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search for a service" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/listing" className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-black transition hover:bg-black/5">
            Explore <ChevronDown className="h-4 w-4" />
          </Link>
          {navItems.filter((item) => item.href !== '/listing').slice(0, 3).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-black/5'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <span className="hidden max-w-[180px] items-center gap-2 truncate rounded-full bg-[#f4f6fb] px-3 py-2 text-sm font-black sm:inline-flex"><UserCircle2 className="h-4 w-4 shrink-0 text-[#3f6ff2]" /> {session.name}</span>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-[0_8px_18px_rgba(63,111,242,0.28)] sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create listing</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Log in</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-[0_8px_18px_rgba(63,111,242,0.28)] sm:inline-flex"><UserPlus className="h-4 w-4" /> Join as a professional</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search for a service" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-black">Logout {session.name}</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
