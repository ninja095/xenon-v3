// Здесь пока используем мок‑данные, позже можно заменить на реальные запросы к API
const MOCK_PROJECTS = [
  {
    id: 1,
    industry: 'Ритейл',
    title: 'Увеличение выручки на 30%',
    result: 'Внедрили CRM‑систему, увеличили выручку на 30% за 6 месяцев.'
  },
  {
    id: 2,
    industry: 'Финансы',
    title: 'Снижение киберрисков на 95%',
    result: 'Настроили систему кибербезопасности, снизили риски на 95%.'
  }
];

export async function getProjects() {
  return Promise.resolve(MOCK_PROJECTS);
}


