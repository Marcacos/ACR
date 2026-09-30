import { useEffect, useState } from 'react'
import { clinic, doctors, exams, faq, photos, plans, specialties, whatsappLink } from './data'

type IconName = 'arrow' | 'activity' | 'bone' | 'brain' | 'calendar' | 'check' | 'chevron' | 'clock' | 'droplet' | 'flower' | 'heart' | 'leaf' | 'map' | 'menu' | 'message' | 'phone' | 'pulse' | 'sparkle' | 'stethoscope' | 'sun' | 'wind' | 'close'

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  activity: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
  bone: <><path d="M17 10c1.7-1.7 3.4-1.9 4.2-.9s.4 2.4-1.1 3.9l-7.1 7.1c-1.5 1.5-2.9 1.9-3.9 1.1s-.8-2.5.9-4.2"/><path d="M7 14c-1.7 1.7-3.4 1.9-4.2.9s-.4-2.4 1.1-3.9L11 4c1.5-1.5 2.9-1.9 3.9-1.1s.8 2.5-.9 4.2"/></>,
  brain: <><path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 1 7.8A3 3 0 0 0 12 18Z"/><path d="M12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-1 7.8A3 3 0 0 1 12 18Z"/><path d="M8 8h.01M16 8h.01M7 14h.01M17 14h.01"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  droplet: <><path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z"/><path d="M9 16a3 3 0 0 0 3 3"/></>,
  flower: <><path d="M12 12c-3-3-3-7 0-8 3 1 3 5 0 8Zm0 0c3-3 7-3 8 0-1 3-5 3-8 0Zm0 0c3 3 3 7 0 8-3-1-3-5 0-8Zm0 0c-3 3-7 3-8 0 1-3 5-3 8 0Z"/><circle cx="12" cy="12" r="1"/></>,
  heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/><path d="M3.5 12h5l2-3 3 6 2-3h5"/></>,
  leaf: <><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z"/><path d="M4 21c3-5 7-8 12-11"/></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></>,
  phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L7.7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 1.7 1.8Z"/></>,
  pulse: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
  sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z"/></>,
  stethoscope: <><path d="M6 3v5a5 5 0 0 0 10 0V3"/><path d="M6 3H4v2M16 3h2v2M11 13v2a5 5 0 0 0 10 0v-2"/><circle cx="21" cy="12" r="2"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.1 7.1-1.4-1.4M6.3 6.3 4.9 4.9m14.2 0-1.4 1.4M6.3 17.7l-1.4 1.4"/></>,
  wind: <><path d="M3 8h12.5a2.5 2.5 0 1 0-2.5-2.5M2 12h17a2 2 0 1 1-2 2M4 16h11.5a2.5 2.5 0 1 1-2.5 2.5"/></>,
  close: <><path d="m18 6-12 12M6 6l12 12"/></>,
}

function Icon({ name, size = 20, className = '' }: { name: IconName; size?: number; className?: string }) {
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function Brand({ light = false }: { light?: boolean }) {
  return <a className="brand" href="/#inicio" aria-label="ACR Medical Center — início"><img src={light ? '/logo-light.png' : '/logo.png'} alt="" height={46} /><span className="brand-name">Medical Center</span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const homePrefix = window.location.pathname.startsWith('/especialidades/') ? '/' : ''
  const links = [['Especialidades', `${homePrefix}#especialidades`], ['Exames', `${homePrefix}#exames`], ['Corpo clínico', `${homePrefix}#equipe`], ['A clínica', `${homePrefix}#sobre`], ['Contato', `${homePrefix}#contato`]]
  return <header className="site-header"><div className="header-inner"><Brand /><nav className={open ? 'nav-open' : ''} aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobile-nav-cta" href={whatsappLink('Olá! Gostaria de agendar um atendimento na ACR Medical Center.')} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <Icon name="arrow" size={16} /></a></nav><div className="header-actions"><a className="header-phone" href={`tel:${clinic.phoneNumber}`} aria-label={`Ligar para ${clinic.phoneDisplay}`}><Icon name="phone" size={17} /> <span>{clinic.phoneDisplay}</span></a><a className="button button-primary header-cta" href={whatsappLink('Olá! Gostaria de agendar um atendimento na ACR Medical Center.')} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <Icon name="arrow" size={16} /></a><button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button></div></div></header>
}

function Hero() {
  return <section className="hero" id="inicio"><div className="hero-grid container"><div className="hero-copy text-left"><span className="eyebrow"><span className="eyebrow-dot" /> UM CUIDADO MAIS PERTO DE VOCÊ</span><h1>Saúde com atenção.<br /><em>Cuidado por inteiro.</em></h1><p className="hero-intro">Especialidades, exames e uma equipe prestativa reunidos em um ambiente acolhedor, no coração de Tubarão.</p><div className="hero-ctas"><a className="button button-primary button-large" href={whatsappLink('Olá! Gostaria de agendar um atendimento na ACR Medical Center.')} target="_blank" rel="noreferrer"><Icon name="message" size={18} /> Agendar pelo WhatsApp</a><a className="button button-outline button-large" href={`tel:${clinic.phoneNumber}`}><Icon name="phone" size={17} /> Ligar para a clínica</a></div><p className="hero-caption"><Icon name="check" size={15} /> Atendimento humanizado em Tubarão/SC</p></div><div className="hero-visual" aria-label="Ilustração abstrata de um ambiente de saúde acolhedor"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-cross"><span/><span/></div><div className="visual-label"><span className="label-index">ACR <b>·</b> 01</span><span>Um lugar para<br />cuidar de você.</span><span className="label-rule"/></div><div className="visual-stamp"><span>ACOLHIMENTO</span><strong>+</strong><span>CUIDADO</span></div><div className="visual-foot"><span>47° 36' S</span><span>TUBARÃO · SC</span></div></div></div><div className="trust-strip"><div className="trust-inner container"><div className="trust-item"><span className="trust-icon"><Icon name="stethoscope" size={19}/></span><span><strong>Multiespecialidades</strong><small>Diferentes áreas em um só lugar</small></span></div><div className="trust-divider"/><div className="trust-item"><span className="trust-icon"><Icon name="heart" size={19}/></span><span><strong>Cuidado humanizado</strong><small>Atendimento próximo e acolhedor</small></span></div><div className="trust-divider"/><div className="trust-item"><span className="trust-icon"><Icon name="map" size={19}/></span><span><strong>No centro de Tubarão</strong><small>Fácil acesso para você</small></span></div></div></div></section>
}

function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: React.ReactNode; text?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'heading-centered' : ''}`}><span className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function SpecialtySection() {
  return <section className="section specialties-section" id="especialidades"><div className="container"><div className="section-topline"><SectionHeading eyebrow="CUIDADO INTEGRADO" title={<>Uma equipe. <em>Várias especialidades.</em></>} text="Encontre diferentes profissionais e áreas de cuidado em um só endereço."/><span className="section-count"><strong>13</strong><small>áreas listadas<br/>para confirmar</small></span></div><div className="specialty-grid">{specialties.map((item, index) => <a className="specialty-card" href={`/especialidades/${item.slug}`} key={item.slug}><span className="card-index">{String(index + 1).padStart(2, '0')}</span><span className="specialty-icon"><Icon name={item.icon as IconName} size={22}/></span><strong>{item.name}</strong><span className="specialty-arrow"><Icon name="arrow" size={17}/></span></a>)}</div><p className="confirmation-note"><Icon name="check" size={16}/> Especialidades e disponibilidade sujeitas à confirmação com a clínica.</p></div></section>
}

function ExamsSection() {
  return <section className="section exams-section" id="exames"><div className="container exams-layout"><div className="exams-intro"><SectionHeading eyebrow="EXAMES E DIAGNÓSTICO" title={<>Mais clareza<br/>para <em>cuidar bem.</em></>} text="Exames e procedimentos realizados com atenção, em um espaço preparado para receber você."/><a className="text-link" href={whatsappLink('Olá! Gostaria de saber mais sobre os exames disponíveis na ACR Medical Center.')} target="_blank" rel="noreferrer">Consulte a equipe sobre exames <Icon name="arrow" size={17}/></a></div><div className="exam-list">{exams.map((exam, i) => <div className="exam-row" key={exam}><span className="exam-number">0{i + 1}</span><span>{exam}</span><Icon name="arrow" size={17}/></div>)}<p className="small-note">Consulte a equipe sobre disponibilidade, preparo e agendamento de cada exame.</p></div></div></section>
}

function TeamSection() {
  return <section className="section team-section" id="equipe"><div className="container"><div className="team-heading"><SectionHeading eyebrow="CORPO CLÍNICO" title={<>Pessoas que cuidam<br/>de <em>pessoas.</em></>} text="Conheça quem faz parte da nossa equipe."/><div className="team-side-note"><span className="side-line"/><p>Em breve, informações dos profissionais, especialidades e registros.</p></div></div>{doctors.length ? <div className="doctor-grid">{doctors.map((doctor) => <article className="doctor-card" key={`${doctor.name}-${doctor.crm}`}>{doctor.photo && <img src={doctor.photo} alt={`Foto de ${doctor.name}`} loading="lazy"/>}<h3>{doctor.name}</h3><p>{doctor.specialty}</p><span>CRM {doctor.crm}</span></article>)}</div> : <div className="team-placeholder"><div className="placeholder-pattern"><span/><span/><span/></div><div className="placeholder-copy"><span className="placeholder-tag"><Icon name="calendar" size={15}/> PERFIS EM ATUALIZAÇÃO</span><h3>Uma equipe dedicada<br/>a receber você.</h3><p>Os nomes, especialidades e números de CRM serão publicados após confirmação pela clínica.</p><a className="text-link" href={whatsappLink('Olá! Gostaria de informações sobre os profissionais da ACR Medical Center.')} target="_blank" rel="noreferrer">Fale com a equipe <Icon name="arrow" size={16}/></a></div><div className="placeholder-meta"><span>INFORMAÇÃO RESPONSÁVEL</span><span>CRM sempre visível</span></div></div>}</div></section>
}

function PlansSection() {
  return <section className="plans-section"><div className="container plans-layout"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> FORMAS DE ATENDIMENTO</span><h2>Um caminho de cuidado<br/><em>que funciona para você.</em></h2><p>Atendimento particular e convênios informados pela clínica. Confirme a cobertura da sua especialidade antes de agendar.</p><a className="button button-light" href={whatsappLink('Olá! Gostaria de confirmar a cobertura do meu convênio na ACR Medical Center.')} target="_blank" rel="noreferrer">Consultar cobertura <Icon name="arrow" size={17}/></a></div><div className="plans-list">{plans.map((plan, i) => <div className="plan-row" key={plan.name}><span className="plan-index">0{i + 1}</span><div><strong>{plan.name}</strong><small>{plan.note}</small></div><Icon name="check" size={19}/></div>)}<small className="plans-footnote">Lista e condições sujeitas a confirmação com a clínica.</small></div></div></section>
}

function AboutSection() {
  return <section className="section about-section" id="sobre"><div className="container"><div className="about-top"><SectionHeading eyebrow="SOBRE A ACR" title={<>Cuidado integrado,<br/><em>com jeito de casa.</em></>} text={clinic.description}/><div className="about-note"><span className="about-note-mark">“</span><p>Reunimos médicos, nutrição, psicologia e serviços de apoio para tornar o cuidado mais próximo e organizado.</p><span className="about-note-sign">ACR MEDICAL CENTER · TUBARÃO</span></div></div><div className="gallery-grid">{photos.map((photo, i) => <div className={`gallery-tile ${photo.className}`} key={photo.className}><div className="gallery-art"><span className="gallery-art-circle"/><span className="gallery-art-line"/><span className="gallery-art-cross"><i/><i/></span></div><span className="gallery-caption"><span>0{i + 1}</span>{photo.label}<small>Foto ilustrativa pendente</small></span></div>)}</div><div className="same-building"><span className="same-building-icon"><Icon name="map" size={20}/></span><p><strong>Mais serviços no mesmo prédio</strong><br/>Clínica Radimagem (imagem) e posto de coleta Laborvida.</p><span className="same-building-pin">CENTRO · TUBARÃO/SC</span></div></div></section>
}

function LocationSection() {
  return <section className="section location-section" id="contato"><div className="container"><div className="location-heading"><SectionHeading eyebrow="LOCALIZAÇÃO E CONTATO" title={<>Perto de você,<br/><em>no centro da cidade.</em></>} text="Nossa equipe está pronta para orientar você sobre consultas, exames e convênios."/><div className="location-actions"><a className="button button-primary" href={whatsappLink('Olá! Gostaria de falar com a ACR Medical Center.')} target="_blank" rel="noreferrer"><Icon name="message" size={18}/> Chamar no WhatsApp</a><a className="button button-outline" href={`tel:${clinic.phoneNumber}`}><Icon name="phone" size={17}/> Ligar agora</a></div></div><div className="location-grid"><div className="contact-card"><div className="contact-detail"><span className="detail-icon"><Icon name="map"/></span><div><small>ENDEREÇO</small><p>{clinic.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`} target="_blank" rel="noreferrer" className="text-link">Abrir rota <Icon name="arrow" size={15}/></a></div></div><div className="contact-detail"><span className="detail-icon"><Icon name="phone"/></span><div><small>TELEFONE E WHATSAPP</small><p><a href={`tel:${clinic.phoneNumber}`}>{clinic.phoneDisplay}</a><br/><a href={whatsappLink('Olá!')} target="_blank" rel="noreferrer">{clinic.whatsappDisplay}</a></p></div></div><div className="contact-detail"><span className="detail-icon"><Icon name="clock"/></span><div><small>HORÁRIO DE FUNCIONAMENTO</small><p>{clinic.hours}</p></div></div><div className="contact-detail"><span className="detail-icon"><Icon name="message"/></span><div><small>E-MAIL</small><p><a href={`mailto:${clinic.email}`}>{clinic.email}</a>{clinic.emailNeedsConfirmation && <small className="inline-placeholder">Confirmar endereço</small>}</p></div></div></div><div className="map-card"><iframe title="Mapa da localização da ACR Medical Center em Tubarão" src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-overlay" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`} target="_blank" rel="noreferrer"><span className="map-pin"><Icon name="map" size={20}/></span><span><strong>ACR Medical Center</strong><small>Av. José Acácio Moreira, 1691 · Tubarão/SC</small></span><Icon name="arrow" size={17}/></a></div></div></div></section>
}

function FAQSection() {
  return <section className="section faq-section" id="duvidas"><div className="container faq-layout"><SectionHeading eyebrow="DÚVIDAS FREQUENTES" title={<>Informação para<br/><em>seguir com tranquilidade.</em></>} text="Se precisar, nossa equipe também pode ajudar pelo WhatsApp."/><div className="faq-list">{faq.map((item) => <details key={item.question} className="faq-item"><summary>{item.question}<span><Icon name="chevron" size={18}/></span></summary><p>{item.answer}</p></details>)}</div></div></section>
}

function ContactForm() {
  const [name, setName] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !interest) { setError('Preencha seu nome e selecione o assunto para continuar.'); return }
    setError('')
    const text = `Olá! Meu nome é ${name.trim()}. Gostaria de falar sobre ${interest}.${message.trim() ? `\n\nMensagem: ${message.trim()}` : ''}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }
  return <section className="contact-form-section"><div className="container form-layout"><div className="form-intro"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot"/> FALE COM A GENTE</span><h2>O próximo passo<br/>começa com <em>uma conversa.</em></h2><p>Conte o que você precisa. Vamos abrir uma conversa no WhatsApp para a equipe orientar você.</p><div className="form-contact-line"><Icon name="message" size={17}/><span>{clinic.whatsappDisplay}</span></div></div><form className="contact-form" onSubmit={submit}><label>Seu nome<input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="Como podemos chamar você?" required/></label><label>Como podemos ajudar?<select value={interest} onChange={(event) => setInterest(event.target.value)} required><option value="" disabled>Selecione um assunto</option><option>agendamento de consulta</option><option>agendamento de exame</option><option>informações sobre convênios</option><option>informações gerais</option></select></label><label>Mensagem <span className="optional-label">opcional</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={3} placeholder="Escreva sua dúvida (não inclua dados sensíveis)."/></label><p className="form-consent">Ao continuar, você abrirá o WhatsApp para enviar sua mensagem à clínica.</p><button className="button button-light form-submit" type="submit">Continuar pelo WhatsApp <Icon name="arrow" size={17}/></button><p className="form-error" role="alert" aria-live="polite">{error}</p></form></div></section>
}

function Footer() {
  const homePrefix = window.location.pathname.startsWith('/especialidades/') ? '/' : ''
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Brand light/><p>Um cuidado mais próximo e integrado para você e sua família.</p><span className="footer-location">TUBARÃO · SANTA CATARINA</span></div><div className="footer-col"><strong>Explore</strong><a href={`${homePrefix}#especialidades`}>Especialidades</a><a href={`${homePrefix}#exames`}>Exames</a><a href={`${homePrefix}#equipe`}>Corpo clínico</a><a href={`${homePrefix}#sobre`}>A clínica</a></div><div className="footer-col"><strong>Contato</strong><a href={`tel:${clinic.phoneNumber}`}>{clinic.phoneDisplay}</a><a href={whatsappLink('Olá!')} target="_blank" rel="noreferrer">WhatsApp {clinic.whatsappDisplay}</a><a href={`mailto:${clinic.email}`}>{clinic.email}</a><span>{clinic.hours}</span></div><div className="footer-col"><strong>Redes sociais</strong><span>{clinic.instagram}</span><a href={clinic.facebookUrl} target="_blank" rel="noreferrer">Facebook ↗</a><a href={`${homePrefix}#privacidade`}>Privacidade e LGPD</a></div></div><div className="footer-legal"><p><strong>{clinic.legalName}</strong><br/>CNPJ {clinic.cnpj}<br/>Responsável técnico: {clinic.technicalLead}</p><p className="medical-notice">As informações deste site são de caráter informativo e não substituem uma consulta médica. Em caso de urgência, procure um pronto atendimento.</p><a href={`${homePrefix}#inicio`} className="back-top">Voltar ao início ↑</a></div><div id="privacidade" className="privacy-note"><strong>Privacidade e LGPD</strong><p>As informações digitadas no formulário são usadas somente para compor uma mensagem a ser enviada por você pelo WhatsApp. Este site não armazena nem transmite dados a um servidor. Evite incluir dados pessoais sensíveis.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ACR Medical Center</span><span>Informação clara. Cuidado com atenção.</span></div></div></footer>
}

function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={whatsappLink('Olá! Gostaria de falar com a ACR Medical Center.')} target="_blank" rel="noreferrer" aria-label="Fale com a ACR Medical Center pelo WhatsApp"><Icon name="message" size={22}/><span>WhatsApp</span></a>
}

function SpecialtyPage({ slug }: { slug: string }) {
  const specialty = specialties.find((item) => item.slug === slug)
  useEffect(() => {
    if (specialty) document.title = `${specialty.name} | ACR Medical Center`
    return () => { document.title = 'ACR Medical Center | Cuidado integrado em Tubarão' }
  }, [specialty])
  if (!specialty) return <main className="not-found container"><span className="eyebrow">PÁGINA NÃO ENCONTRADA</span><h1>Vamos encontrar<br/><em>o que você procura.</em></h1><a className="button button-primary" href="/#especialidades">Voltar às especialidades <Icon name="arrow" size={17}/></a></main>
  return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header/><main id="main" className="specialty-page container"><span className="eyebrow"><span className="eyebrow-dot"/> ESPECIALIDADE · ACR MEDICAL CENTER</span><h1>{specialty.name}<br/><em>em Tubarão/SC.</em></h1><p>A ACR Medical Center reúne diferentes áreas de cuidado em um ambiente acolhedor. Fale com a equipe para confirmar a disponibilidade desta especialidade, profissionais, cobertura do convênio e horários.</p><div className="specialty-page-note"><Icon name="check" size={18}/> Informações sobre profissionais e disponibilidade devem ser confirmadas com a clínica.</div><a className="button button-primary button-large" href={whatsappLink(`Olá! Gostaria de confirmar a disponibilidade de ${specialty.name} na ACR Medical Center.`)} target="_blank" rel="noreferrer"><Icon name="message" size={18}/> Consultar pelo WhatsApp</a><a className="back-specialties" href="/#especialidades">← Ver todas as especialidades</a></main><Footer/><FloatingWhatsApp/></>
}

export default function App() {
  const path = window.location.pathname.match(/^\/especialidades\/([^/]+)\/?$/)
  const specialtySlug = path ? decodeURIComponent(path[1]) : null
  useEffect(() => {
    const schema = { '@context': 'https://schema.org', '@type': 'MedicalClinic', name: clinic.name, legalName: clinic.legalName, taxID: clinic.cnpj, description: clinic.description, telephone: clinic.phoneNumber, email: clinic.email, address: { '@type': 'PostalAddress', streetAddress: clinic.streetAddress, addressLocality: clinic.locality, addressRegion: clinic.region, postalCode: clinic.postalCode, addressCountry: 'BR' }, medicalSpecialty: specialties.map((item) => item.name), availableService: exams.map((name) => ({ '@type': 'MedicalTest', name })), sameAs: [clinic.facebookUrl] }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [])
  if (specialtySlug) return <SpecialtyPage slug={specialtySlug}/>
  return <><a className="skip-link" href="#main">Pular para o conteúdo</a><Header/><main id="main"><Hero/><SpecialtySection/><ExamsSection/><TeamSection/><PlansSection/><AboutSection/><LocationSection/><FAQSection/><ContactForm/></main><Footer/><FloatingWhatsApp/></>
}
