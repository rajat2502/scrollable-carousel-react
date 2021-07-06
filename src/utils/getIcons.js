const getIcons = () => [
  {
    id: 1,
    name: 'left',
    svg: (
      <g
        fill='none'
        strokeMiterlimit='10'
        fontFamily='none'
        fontSize='none'
        fontWeight='none'
        textAnchor='none'
        style={{ mixBlendMode: 'normal' }}
      >
        <path d='M0 172V0h172v172z'></path>
        <path
          fill='#3498db'
          d='M99.567 150.5c9.524 0 15.207-10.614 9.925-18.54L78.855 86l30.637-45.96c5.282-7.926-.401-18.54-9.925-18.54a11.937 11.937 0 00-9.926 5.31L55.484 78.053a14.332 14.332 0 000 15.903l34.157 51.242a11.948 11.948 0 009.925 5.303z'
        ></path>
      </g>
    ),
    width: 24,
    height: 24,
    viewBox: '0 0 172 172',
  },
  {
    id: 2,
    name: 'right',
    svg: (
      <g
        fill='none'
        strokeMiterlimit='10'
        fontFamily='none'
        fontSize='none'
        fontWeight='none'
        textAnchor='none'
        style={{ mixBlendMode: 'normal' }}
      >
        <path d='M0 172V0h172v172z'></path>
        <path
          fill='#3498db'
          d='M79.615 21.5c-9.525 0-15.201 10.614-9.92 18.54L100.334 86l-30.637 45.96c-5.282 7.926.394 18.54 9.919 18.54 3.984 0 7.71-1.992 9.925-5.31l34.157-51.242a14.332 14.332 0 000-15.903L89.54 26.803a11.939 11.939 0 00-9.925-5.303z'
        ></path>
      </g>
    ),
    width: 24,
    height: 24,
    viewBox: '0 0 172 172',
  },
];

export default getIcons;
