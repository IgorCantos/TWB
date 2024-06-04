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
  // {
  //   title: 'Transações',
  //   path: '/transacoes',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Meus bancos',
    path: '/products',
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
  // {
  //   title: 'Metas financeiras',
  //   path: '/404',
  //   icon: icon('ic_blog'),
  // },
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
