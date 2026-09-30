export const clinic = {
  name: 'ACR Medical Center',
  legalName: 'Centro de Saúde Beira-Rio LTDA',
  cnpj: '37.029.286/0001-48',
  address: 'Avenida José Acácio Moreira, 1691, Centro, Tubarão/SC, CEP 88704-557',
  streetAddress: 'Avenida José Acácio Moreira, 1691',
  locality: 'Tubarão',
  region: 'SC',
  postalCode: '88704-557',
  whatsappDisplay: '(48) 99622-6173',
  whatsappNumber: '5548996226173',
  phoneDisplay: '(48) 3052-4400',
  phoneNumber: '+554830524400',
  email: 'adm.acrmedicalcenter@gmail.com',
  emailNeedsConfirmation: true,
  hours: '[PLACEHOLDER: confirmar horário de funcionamento]',
  instagram: '[PLACEHOLDER: inserir perfil do Instagram]',
  facebook: 'ACR Medical Center',
  facebookUrl: 'https://www.facebook.com/search/pages/?q=ACR%20Medical%20Center%20Tubar%C3%A3o',
  technicalLead: '[PLACEHOLDER: nome e CRM do responsável técnico]',
  mapQuery: 'Avenida José Acácio Moreira, 1691, Centro, Tubarão, SC, 88704-557',
  description: 'Clínica médica de multiespecialidades com atendimento humanizado, ambiente acolhedor e equipe prestativa. Reúne médicos, nutrição e psicologia, com exames de imagem, cardiológicos e laboratoriais para um cuidado integrado.',
}

export const specialties = [
  { name: 'Clínica médica', icon: 'stethoscope', slug: 'clinica-medica' },
  { name: 'Cardiologia', icon: 'heart', slug: 'cardiologia' },
  { name: 'Dermatologia', icon: 'sparkle', slug: 'dermatologia' },
  { name: 'Pediatria', icon: 'sun', slug: 'pediatria' },
  { name: 'Psiquiatria', icon: 'brain', slug: 'psiquiatria' },
  { name: 'Angiologia e cirurgia vascular', icon: 'activity', slug: 'angiologia-cirurgia-vascular' },
  { name: 'Ortopedia', icon: 'bone', slug: 'ortopedia' },
  { name: 'Pneumologia', icon: 'wind', slug: 'pneumologia' },
  { name: 'Urologia', icon: 'droplet', slug: 'urologia' },
  { name: 'Ginecologia', icon: 'flower', slug: 'ginecologia' },
  { name: 'Endocrinologia', icon: 'pulse', slug: 'endocrinologia' },
  { name: 'Nutrição', icon: 'leaf', slug: 'nutricao' },
  { name: 'Psicologia', icon: 'message', slug: 'psicologia' },
]

export const exams = ['Eletrocardiograma', 'Holter 24h', 'MAPA 24h', 'Teste ergométrico (esteira)', 'Bioimpedância', 'Curativos']

export const plans = [
  { name: 'Particular', note: 'Atendimento particular' },
  { name: 'Pladisa', note: 'Confirmar cobertura para a especialidade' },
  { name: 'CAASC', note: 'Confirmar cobertura para a especialidade' },
]

export const doctors: { name: string; specialty: string; crm: string; photo?: string }[] = []

export const faq = [
  { question: 'Como faço para agendar uma consulta?', answer: 'Entre em contato pelo WhatsApp ou telefone. A equipe informa os horários disponíveis e orienta sobre a especialidade desejada.' },
  { question: 'Quais convênios são aceitos?', answer: 'A clínica informa atendimento particular, Pladisa e CAASC. A cobertura pode variar conforme a especialidade e o procedimento; confirme as condições diretamente com a equipe.' },
  { question: 'O que preciso levar no dia da consulta?', answer: 'Confirme com a equipe no momento do agendamento. Em geral, tenha em mãos um documento de identificação e, se aplicável, a carteirinha do convênio e exames anteriores.' },
  { question: 'Onde fica a clínica?', answer: 'Na Avenida José Acácio Moreira, 1691, Centro, Tubarão/SC. No mesmo prédio estão a Clínica Radimagem e um posto de coleta Laborvida.' },
]

export const photos = [
  { src: '/fotos/recepcao-balcao.jpg', alt: 'Recepção da ACR Medical Center com balcão em mármore escuro e logo na parede', label: 'Recepção' },
  { src: '/fotos/recepcao-logo.jpg', alt: 'Parede em mármore branco com a logo ACR Medical Center e luminárias pendentes', label: 'Ambiente acolhedor' },
  { src: '/fotos/fachada-frontal.jpg', alt: 'Fachada de vidro do edifício ACR Medical Center', label: 'Nosso edifício' },
]

export const whatsappLink = (message: string) => `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`
