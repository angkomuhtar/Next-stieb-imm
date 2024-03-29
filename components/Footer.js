export const Footer = () => {
  return (
    <div className='bg-main-200'>
      <div className='container p-10 grid grid-cols-3 gap-7'>
        <div className='flex flex-col space-y-10'>
          <div className='flex space-x-3 items-center'>
            <img src='./logo.png' className='h-10' />
            <div className='items-center'>
              <h1 className='font-bold'>STIEB</h1>
              <h3 className='text-xs font-semibold uppercase'>
                insan Madani mandar
              </h3>
            </div>
          </div>
          <div className=''>
            <div className='flex space-x-5'>
              <svg
                width='20'
                height='20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='a'>
                  <path
                    d='M19.367 18.102 18 14h-1.5l.833 4H2.667l.833-4H2L.632 18.102C.285 19.146.9 20 2 20h16c1.1 0 1.715-.854 1.367-1.898ZM15 5A5 5 0 1 0 5 5c0 4.775 5 10 5 10s5-5.225 5-10Zm-7.7.06a2.699 2.699 0 1 1 5.397 0 2.699 2.699 0 0 1-5.397 0Z'
                    fill='#000'
                  />
                </g>
                <defs>
                  <clipPath id='a'>
                    <path fill='#fff' d='M0 0h20v20H0z' />
                  </clipPath>
                </defs>
              </svg>

              <p className='text-md font-bold capitalize'>kampus</p>
            </div>
            <p className='text-semibold text-sm mt-5 pl-10'>
              Jl. Cendrawasih, Takatidung, Polewali, Kabupaten Polewali Mandar,
              Sulawesi Barat
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <p className='text-md font-bold capitalize'>Kontak</p>
          <ul className='mt-5 pl-5 space-y-5'>
            <li>
              <p className='flex'>
                <span className='mr-5'>
                  <svg
                    width='20'
                    height='20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M15 8.125h-1.25a1.877 1.877 0 0 0-1.875-1.875V5A3.129 3.129 0 0 1 15 8.125Z'
                      fill='#000'
                    />
                    <path
                      d='M17.5 8.125h-1.25a4.38 4.38 0 0 0-4.375-4.375V2.5A5.631 5.631 0 0 1 17.5 8.125ZM12.708 13.426l1.4-1.4a1.354 1.354 0 0 1 1.46-.3l1.706.683a1.354 1.354 0 0 1 .85 1.257v3.1a1.353 1.353 0 0 1-1.427 1.357C4.747 17.378 2.332 7.255 1.884 3.38a1.351 1.351 0 0 1 1.347-1.505h3.045a1.354 1.354 0 0 1 1.258.851l.682 1.705a1.354 1.354 0 0 1-.3 1.46l-1.4 1.4s.776 5.458 6.192 6.135Z'
                      fill='#000'
                    />
                  </svg>
                </span>
                (+62)85397078064
              </p>
            </li>

            <li>
              <p className='flex'>
                <span className='mr-5'>
                  <svg
                    width='20'
                    height='20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10 8.75h1.25V10H10V8.75ZM12.5 8.75h1.25V10H12.5V8.75ZM15 8.75h1.25V10H15V8.75ZM10 11.25h1.25v1.25H10v-1.25ZM12.5 11.25h1.25v1.25H12.5v-1.25ZM15 11.25h1.25v1.25H15v-1.25ZM10 13.75h1.25V15H10v-1.25ZM12.5 13.75h1.25V15H12.5v-1.25ZM15 13.75h1.25V15H15v-1.25ZM10 6.25h6.25V7.5H10V6.25Z'
                      fill='#000'
                    />
                    <path
                      d='M17.5 3.75H8.75v-.625a1.251 1.251 0 0 0-1.25-1.25H5a1.251 1.251 0 0 0-1.25 1.25v.625H2.5A1.251 1.251 0 0 0 1.25 5v11.25A1.251 1.251 0 0 0 2.5 17.5h15a1.25 1.25 0 0 0 1.25-1.25V5a1.25 1.25 0 0 0-1.25-1.25ZM5 3.125h2.5V13.75H5V3.125ZM17.5 16.25h-15V5h1.25v8.75A1.251 1.251 0 0 0 5 15h2.5a1.25 1.25 0 0 0 1.25-1.25V5h8.75v11.25Z'
                      fill='#000'
                    />
                  </svg>
                </span>
                (0411) 87654321
              </p>
            </li>

            <li>
              <p className='flex'>
                <span className='mr-5'>
                  <svg
                    width='20'
                    height='20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='m2.5 5 6.667 4.167L15.833 5v2.5H17.5V3.333c0-.916-.75-1.666-1.667-1.666H2.5c-.917 0-1.658.75-1.658 1.666l-.009 10C.833 14.25 1.583 15 2.5 15h8.333v-1.667H2.5V5Zm13.333-1.667L9.167 7.5 2.5 3.333h13.333Z'
                      fill='#000'
                    />
                    <path
                      d='M17.5 11.667V15c0 .917-.75 1.667-1.667 1.667-.916 0-1.666-.75-1.666-1.667v-3.75c0-.233.183-.417.416-.417.234 0 .417.184.417.417V15h1.667v-3.75a2.083 2.083 0 1 0-4.167 0V15a3.332 3.332 0 1 0 6.667 0v-3.333H17.5Z'
                      fill='#000'
                    />
                  </svg>
                </span>
                kontak@stieb-insanmadani.ac.id
              </p>
            </li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <p className='text-md font-bold capitalize'>Social</p>
          <ul className='flex mt-5 pl-5 space-x-3'>
            <li>
              <a href='#'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24.0001H19.6177C22.0453 24.0001 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z'
                    fill='black'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href='#'>
                <svg
                  width='24'
                  height='25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M21.429.714H2.57A2.572 2.572 0 0 0 0 3.286v18.857a2.572 2.572 0 0 0 2.571 2.571H21.43A2.572 2.572 0 0 0 24 22.143V3.286A2.572 2.572 0 0 0 21.429.714Zm-2.62 8.507c.01.15.01.306.01.456 0 4.644-3.535 9.996-9.996 9.996a9.95 9.95 0 0 1-5.394-1.575c.284.032.557.043.846.043a7.044 7.044 0 0 0 4.36-1.5 3.518 3.518 0 0 1-3.283-2.437c.54.08 1.028.08 1.585-.065a3.514 3.514 0 0 1-2.812-3.45v-.043a3.51 3.51 0 0 0 1.586.445 3.506 3.506 0 0 1-1.565-2.925c0-.654.172-1.254.477-1.773a9.976 9.976 0 0 0 7.243 3.675c-.498-2.384 1.286-4.318 3.429-4.318a3.5 3.5 0 0 1 2.566 1.109 6.885 6.885 0 0 0 2.228-.847 3.504 3.504 0 0 1-1.543 1.934 6.991 6.991 0 0 0 2.025-.546A7.396 7.396 0 0 1 18.81 9.22Z'
                    fill='#000'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href='#'>
                <svg
                  width='24'
                  height='24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.997 7.998A4.01 4.01 0 0 0 7.995 12a4.01 4.01 0 0 0 4.002 4.002A4.01 4.01 0 0 0 15.998 12a4.01 4.01 0 0 0-4.001-4.002ZM23.999 12c0-1.657.015-3.3-.078-4.953-.093-1.922-.532-3.627-1.937-5.032C20.576.607 18.874.172 16.953.08 15.296-.014 13.653 0 12 0c-1.657 0-3.3-.015-4.953.078C5.125.172 3.42.61 2.015 2.015.607 3.423.172 5.125.08 7.047-.014 8.704 0 10.346 0 12c0 1.654-.015 3.3.078 4.953.093 1.922.531 3.627 1.936 5.032 1.408 1.408 3.11 1.843 5.032 1.936C8.704 24.014 10.346 24 12 24c1.657 0 3.299.015 4.953-.078 1.921-.093 3.626-.531 5.031-1.936 1.408-1.408 1.843-3.11 1.937-5.032.096-1.654.078-3.296.078-4.953Zm-12.002 6.157A6.148 6.148 0 0 1 5.84 12a6.148 6.148 0 0 1 6.157-6.157A6.148 6.148 0 0 1 18.154 12a6.148 6.148 0 0 1-6.157 6.157ZM18.406 7.03a1.436 1.436 0 0 1-1.438-1.438c0-.796.642-1.438 1.438-1.438a1.436 1.436 0 0 1 1.329 1.988 1.436 1.436 0 0 1-1.329.888Z'
                    fill='#000'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-main-300 w-full'>
        <div className='container p-10'>
          <p className='text-sm text-center text-black'>
            © 2022 STIEB Insan Madani Mandar. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
