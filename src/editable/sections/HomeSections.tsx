import Link from 'next/link'
import { ArrowRight, BadgeCheck, BriefcaseBusiness, MapPin, Search, ShieldCheck, Star, UsersRound, type LucideIcon } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const fallbackCategories = [
  'House Cleaning',
  'Web Design',
  'Accounting',
  'Gardening',
  'Personal Training',
  'Marketing',
]

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

const trustItems: Array<{ title: string; body: string; Icon: LucideIcon }> = [
  { title: 'Verified business profiles', body: 'Compare services, summaries, website links, and contact details before making a decision.', Icon: BadgeCheck },
  { title: 'Built for direct enquiries', body: 'Profile pages keep phone, email, website, and location actions close to the business story.', Icon: UsersRound },
  { title: 'Clear listing quality', body: 'Every page uses centered layouts and readable cards so customers can scan without feeling lost.', Icon: ShieldCheck },
]

function categoryOf(post: SitePost, fallback: string) {
  const content = post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post.tags?.[0] || fallback
}

function serviceHref(primaryRoute: string, value: string) {
  return `${primaryRoute}?category=${encodeURIComponent(value.toLowerCase().replace(/\s+/g, '-'))}`
}

function ServiceCard({ post, href, fallback, online = false }: { post?: SitePost; href: string; fallback: string; online?: boolean }) {
  const title = post ? categoryOf(post, fallback) : fallback
  return (
    <Link href={href} className="group overflow-hidden rounded-md border border-[var(--editable-border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(17,20,47,0.10)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#eef1f7]">
        {post ? <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full w-full items-center justify-center"><BriefcaseBusiness className="h-10 w-10 text-[#8f94aa]" /></div>}
        {online ? <span className="absolute right-3 top-3 rounded-full bg-[#3f6ff2] px-3 py-1 text-xs font-black text-white">Available online</span> : null}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-black tracking-[-0.02em] text-[#11142f]">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#606783]">{post ? getEditableExcerpt(post, 92) : 'Browse local providers, compare details, and contact the right business.'}</p>
      </div>
    </Link>
  )
}

function ListingStripCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group flex min-w-[280px] max-w-[280px] shrink-0 gap-4 rounded-md border border-[var(--editable-border)] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(17,20,47,0.10)]">
      <img src={getEditablePostImage(post)} alt={post.title} className="h-24 w-24 rounded-md object-cover" />
      <div className="min-w-0">
        <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#3f6ff2]">Provider {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-2 text-base font-black leading-tight text-[#11142f]">{post.title}</h3>
        <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#606783]"><MapPin className="h-3.5 w-3.5" /> View profile</p>
      </div>
    </Link>
  )
}

function SectionHeading({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl font-black tracking-[-0.03em] text-[#11142f] sm:text-3xl">{title}</h2>
      <Link href={href} className="text-sm font-black text-[#8f94aa] hover:text-[#3f6ff2]">View All</Link>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Find the right ${taskLabel(primaryTask).toLowerCase()}`
  const popular = fallbackCategories.slice(0, 3).join(', ')
  const heroPosts = posts.slice(0, 5)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8f94aa]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-[#11142f] sm:text-5xl">{heroTitle}</h1>
          <p className="mt-4 text-xl font-black text-[#8f94aa]">Get useful business details within minutes</p>
          <form action="/search" className="mx-auto mt-9 grid max-w-[700px] gap-3 sm:grid-cols-[1fr_210px_124px]">
            <label className="flex h-14 items-center border border-[#dfe3ee] bg-white px-4 focus-within:border-[#3f6ff2]">
              <Search className="h-5 w-5 text-[#8f94aa]" />
              <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-black text-[#11142f] outline-none placeholder:text-[#9aa0b5]" />
            </label>
            <label className="flex h-14 items-center border border-[#dfe3ee] bg-white px-4 focus-within:border-[#3f6ff2]">
              <MapPin className="h-5 w-5 text-[#11142f]" />
              <input name="category" placeholder="Postcode or city" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-black text-[#11142f] outline-none placeholder:text-[#9aa0b5]" />
            </label>
            <button className="h-14 rounded-md bg-[#3f6ff2] px-6 text-sm font-black text-white shadow-[0_10px_20px_rgba(63,111,242,0.25)]">Search</button>
          </form>
          <p className="mt-4 text-sm font-bold text-[#8f94aa]">Popular: {popular}</p>
        </div>
      </div>
      {heroPosts.length ? (
        <div className="mx-auto flex max-w-[1180px] gap-5 overflow-hidden px-4 pb-10 sm:px-6 lg:px-8">
          {heroPosts.map((post, index) => <ListingStripCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      ) : null}
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const cards = posts.slice(0, 6)
  return (
    <section className="border-t border-[var(--editable-border)] bg-[#fbfcff]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading title="Home and Business Services" href={primaryRoute} />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {(cards.length ? cards.slice(0, 3) : []).map((post, index) => (
            <ServiceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} fallback={fallbackCategories[index]} online={index === 1} />
          ))}
          {!cards.length ? fallbackCategories.slice(0, 3).map((item) => <ServiceCard key={item} href={serviceHref(primaryRoute, item)} fallback={item} />) : null}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const cards = posts.slice(3, 9)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading title="Health, Wellbeing, and Professional Help" href={primaryRoute} />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {(cards.length ? cards.slice(0, 3) : fallbackCategories.slice(3, 6)).map((item, index) => (
            typeof item === 'string'
              ? <ServiceCard key={item} href={serviceHref(primaryRoute, item)} fallback={item} online={index < 2} />
              : <ServiceCard key={item.id || item.slug} post={item} href={postHref(primaryTask, item, primaryRoute)} fallback={fallbackCategories[index + 3] || 'Business Service'} online={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(6)
  const visible = categoryPosts.slice(0, 6)
  return (
    <section className="bg-[#fbfcff]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading title="Most Popular Categories" href="/search" />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {visible.slice(0, 3).map((post, index) => <ServiceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} fallback={fallbackCategories[index]} />)}
          {!visible.length ? fallbackCategories.slice(0, 3).map((item) => <ServiceCard key={item} href={serviceHref(primaryRoute, item)} fallback={item} />) : null}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trustItems.map(({ title, body, Icon }) => (
            <div key={title} className="rounded-md border border-[var(--editable-border)] bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-[#3f6ff2]" />
              <h3 className="mt-5 text-lg font-black text-[#11142f]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#606783]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.pageBg} scroll-mt-24`}>
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-md bg-[#11142f] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className={`${dc.type.eyebrow} text-white/55`}>{pagesContent.home.cta.badge}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">{pagesContent.home.cta.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{pagesContent.home.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={pagesContent.home.cta.primaryCta.href} className="inline-flex items-center gap-2 rounded-md bg-[#3f6ff2] px-6 py-3 text-sm font-black text-white">Create listing <ArrowRight className="h-4 w-4" /></Link>
            <Link href={pagesContent.home.cta.secondaryCta.href} className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-black text-[#11142f]"><Star className="h-4 w-4" /> Get help</Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#8f94aa]">{globalContent.site.tagline}</p>
      </div>
    </section>
  )
}
