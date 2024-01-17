// MovieLibrary.js
import React from 'react';
import GenreLibrary from './GenreLibrary';

const movies = [
  {
    title: 'Одиннадцать друзей Оушена',
    genres: [GenreLibrary()[11]],
    image: 'https://www.kinopoisk.ru/1nq4w9203/2a4495fgmp/muVwTc2PCNh8ltCC0IjTm8g2qrnSztF4AS-Vccs8ngI8rq-cerSOI4FAwm3pSJ3Wo24F5StOlPRFRbce-TAR5djiN06SnUeALMjJyYCDh8aGIKfox4WZLkUyhiyQY7EyFJyG7lyLpgOtIYQtrlLPi_suRut6BcjvUwDFIrgmSLm_91Z88bFlz1S_poz7nNKqxHOMpeeCw3E5abRz9hyaPxSapdxYj4khqAuDKZc47ZXjJlrQdQDGrFA3wwruEn6lv8FKe_G_X8Viq6e_6Yjhn_V0jLLih8NlGEWvXM4BiCwXr73SYLGbF6E4pSifM-eJ2A5Ez2E9yK9JNPwq0RlJhKTVVXzqt2j4Qq2UlP6157bWbJWKxLTzThBWnH7fP4w-JYWJ2FGLvyCJAJQVqgbzpe0KRfBhLO2kajDqNt4CVLqL9WV5ybNKxGyEuLz3svSz_mCTkMyy5XoxSLNszBqsPDCNs8tbq5wJnhW2MLEk9qjtCnDzRibqrG8P0TPMPFyEnsZeSvGIc9tXvKy614T0rsZXp6Tqt-xbEmundeECgQgwlZDWd4OiJpAogiOSMsay9jZj1HQkzYNoHcIr0h1tuLTQVl_nulP3V5aXnf2e0JfxVb2GxLPmZQJxtG3MAJ8CO5CM_lu1nhKxLJoRqSvLoP0mbuNUBtawShbsGdETaKybzFJ15a9qxGKRtYr7jsGY9VeQlvOU2lc-TbZfwQqgITazsdpFr44Oiya_NY4z8I_RBkXzWBvQg04j8CnzGGO9oPFzb_m9Zf9Lqqm2-4rOlOddh7LSqcF7DVSZX_YUhSgipI7eUL28NaAnhw63E--qxxVa4UYZ07dOJNsp0xJlvrjndXT4nVHfQquYsd2D34f_V7eF8ZbzVQ9NjUHnMKcIJLiR9X2xjSC2OYUViQbpktobTtBUFdKLbzH1EuAeQKaL_kdd-59vwGqnmo_ylOaU0mG0mtKzwUQhUZtL7xWMPgGQr_Rlr6cggxiWGJYO1JvhME_2cAXHmGk24x7IFW2MnsZ8bfGOa9dap62O25zWmMpQnbnttvRSAkmtdOI4jAAEio7SdJebCJc1hz6RPuiU4A5f1GU47LZPAuIR2h5yirTjZ07Ji1T9VbyIivSO1IbVYLaO9pbZcAVBqXTWA7cdHomv51CWpi-hF5IWnCnplfsuZPZ7JOW3STrvCP4yVp-7_V1a06VX2WCoua3wkcKM2XygmOC41F8EQZtJ6B6aKjiFidhfmocwsTuyKJ0eyYDaN2fzaiPArXcbzxzyIm2Ap_ZJW_6GY8Not7u3_7HihNlwnr_WsfloM3uweucXmSMYl63SdLueCLIOoSKgN86O-w5u1Ws34adNEP0t7RRuuYXddmvTuUrQapKqnN2U_rP6UIul64DUZx9km2vXF5oMMbeh-Fy1vRGNKIoAlR_thvAnUdR5OsmrRAzzMfoAfr-q9EdZ9JpQ80COvL_JodG49myxkfaC0Hg6Y7tV9RaBJxa-k_lnuLkLqQK1Fp4U94_ZOFXlVT7Jl1US4zruI0qMnctNZfyQdcJQtLec5rzHu_RTjLLMtPh6EluRc9YlhR8wqpP5RY2lB6okvQy4BvW28zdjwkslwpVkEN0NyQZ_mp7MUHjbu3LzdJ-_id238YnGcre9zqXBXjNDsGrIBp4VJJqU62SfnA2oDb8UszbXkPcvU_dHGcuNQw3XCcA9Q56763Zq87tJ52-JlLXyls-W_F6uiuiP92Q9SKdB3xqfBBmrvst-saAwiA64E7Ep5rHxKG7rRyHnpXEv0hjRPGqgoNxza-WXScFolLG_xZzCqsJAnbLymPVnE2asccAjqycBqZbWRL28M6EbkiqOGPyQ0wpv0mQxzLNoDewv8zV8hJztTU_-sUHgTJaLlPm04a_ZbYCZz6v9ZDpnplDsFJcEE5ylyHyVlz6hDL8vnzbDgcETbOVWEtmzeAHpBegBfqW67mJA3pJfx2-TibDAj8C16n-Uks6v2lA_cLVBwzW2Dhq8j95rr54LhR28ILUL7bLRNXXWZzLns3EB3izuJkyqudddWs6qUOR_q7KS_YHDrsN1spTClcxpMVaKa_E9uwgmt5P_SYmtPbYDuBGTCN6BwQh010YU4YhALPsW6hBqkqnJRUHSt0Djbqiol_eg77XESKuk4pXjaDxwtVfMMogvHaSXw0agjgOIOrsfuxjpqOQCZsFiG8akQDD2N_QbUI2b3HVL1Jpi736Gra_Soc6y82mWkdKk_nwvS5h98ziiCDSQtut2vL4wigK0Dq0E84njE2bBUBX0qHUE6hrAKVOxgfNRXtStZfZTvYSz64z2htZ3lonNo-xUB0-kd9UChCs8vIX_dYC3HowupTGVMva68i9kwUI354dtNO8K8hBFiqrxTEPKvWTfbpOOvtqi3YzEYraFwLLaZwxmm1fCEJ0AHLuG51S-oRenF6A8iTHujOM3b8tKIuqgezfrFe0dQp2G7WFJ9LRC202hsJ31jvKv_FCwtemR9182dJRVzwG_Hj-lvMlWtpwvixm1FLEb8pH2FFf3UhDJiHQgzC_NAWybgvBLas-IYsBtobep95DVufF9lpTytdtLHlKJWswUtgUTmKbQfqCoEKo9ghmAPtOu8gx5wXo76JBbIt0-4TRcio_nQ1zViWXhVIqsiPeDxbnDYoys4I_kVSVFllPxMYkXA7SW91i_lROiAqotrjrGl9QvQulBAOWqdSzrO80WbZCo1k5DyY5V02qvraPokvq990mRif623HEcaqRi1DmlCSGJqPl9t4ASjgCyH7U587bwBXznchvssWAWyQnKNGGpoe90SeqKdM9BnK-K9pXPi_hpjK3eqOJ2LHG1feAbmT0bsJfYYrqXEa4ZvjecNMeY-w9CzUsc0LJsIvcz7BpVi6T2Y0HPq2_mb4uGiNul0rb-ca634KziayxXpE73H7gaLbCmyX-uiBKtA7g_tSjpq8cubPJmJOyzaQc',
    link: 'https://kinogo.biz/12680-odinnadcat-druzej-oushena.html',
  },
  {
    title: 'Мальчишник в Вегасе',
    genres: [GenreLibrary()[7]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/cdd49af8-7ba4-42ee-9f92-10ba7e3d021b/300x450',
    link: 'https://kinogo.biz/25348-malchishnik-v-vegase.html',
  },
  {
    title: 'Няньки',
    genres: [GenreLibrary()[7], GenreLibrary()[9]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/7a3c0fc5-4820-422c-aeca-636dd0a90e39/300x450',
    link: 'https://kinogo.biz/26638-njanki.html',
  },
  {
    title: 'Унесённые призраками',
    genres: [GenreLibrary()[4], GenreLibrary()[10], GenreLibrary()[8]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/ae3b699c-3db7-4196-a869-39b610bfe706/300x450',
    link: 'https://kinogo.biz/11669-unesennye-prizrakami.html',
  },
  {
    title: 'Ходячий замок',
    genres: [GenreLibrary()[4], GenreLibrary()[10], GenreLibrary()[8]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/399bb0c1-2ac5-46ca-9efd-50d8708e2809/300x450',
    link: 'https://kinogo.biz/search/%D0%A5%D0%BE%D0%B4%D1%8F%D1%87%D0%B8%D0%B9%20%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA',
  },
  {
    title: 'Твоё имя',
    genres: [GenreLibrary()[4], GenreLibrary()[10], GenreLibrary()[8]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e849937d-99d7-418f-bbaa-0a7e7cfff385/300x450',
    link: 'https://kinogo.biz/search/%D0%A2%D0%B2%D0%BE%D1%91%20%D0%B8%D0%BC%D1%8F',
  },
  {
    title: 'Шерлок',
    genres: [GenreLibrary()[5], GenreLibrary()[11], GenreLibrary()[6]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/f28c1ea2-47b0-49d5-b11c-9608744f0233/300x450',
    link: 'https://kinogo.biz/8128-sherlok-1.html',
  },
  {
    title: 'Бэтмен',
    genres: [GenreLibrary()[5], GenreLibrary()[6], GenreLibrary()[2]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/300x450',
    link: 'https://kinogo.biz/52506-bjetmen.html',
  },
  {
    title: '1+1',
    genres: [GenreLibrary()[6], GenreLibrary()[7]],
    image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/300x450',
    link: 'https://kinogo.biz/15821-11.html',
  },
  {
    title: 'Фильм 2',
    genres: ['жанр3', 'жанр4'],
    image: 'ссылка на изображение',
    link: 'ссылка на сайт для просмотра',
  },
  // Добавьте другие фильмы
];

const MovieLibrary = () => {
    return (
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>Жанры: {movie.genres.join(', ')}</p>
            <img src={movie.image} alt={movie.title} />
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              Ссылка на просмотр
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieLibrary;