import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Resumo geral',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Meus bancos',
    icon: icon('ic_cart'),
    children: [
      {
        title: 'Gerenciar bancos',
        path: '/bancos/gerenciar',
      },
      {
        title: 'Transações realizadas',
        path: '/bancos/transacoes',
      },
      {
        title: 'Cartões e faturas',
        path: '/bancos/faturas',
      },
    ],
  },
  {
    title: 'Análises e Projeções',
    path: '/analises',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Metas financeiras',
    path: '/metas',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'Projeções e análises',
  //   path: '/404',
  //   icon: icon('ic_analytics'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
