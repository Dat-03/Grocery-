import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import ItemPopularDeals from './ItemPopularDeals';
import ItemTest from './ItemTest';
import {MasonryFlashList} from '@shopify/flash-list';

const Fruits = () => {
  return (
    <View style={styles.container}>
      <MasonryFlashList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={dataCategories}
        renderItem={({item, index}) => {
          return index == 1 ? <ItemTest /> : <ItemPopularDeals data={{item}} />;
        }}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default Fruits;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 20,
    flex: 1,
    marginStart: 10,
    marginTop: 10,
    marginBottom: 12,
  },
});

const dataCategories = [
  {
    id: 1,
    name: 'Fruits',
    imagef:
      'https://lh3.googleusercontent.com/v3wlS78PpMMvSIONK7lTDxYiFRJ91UQz7L4TzLUf4eMAqpIJYHS1rgK9_kh3sWU1c4z-IqKgnQn6mhdXQONzWLlDsp-Tp5rAPW-Jxg67c5WsRYsaTJ3A2H2fJVOHCdSPTlkwTzYkRYecprGR3F-_m2WpO2wyHlumduIqiv0PRfe23T8syQJKL4QuNUK1ecxj4Y6HNNRutTgoUu2dbsBbPp9W0zGyW6SS3YZuPXT2t_-mNXy3RKnefo7VcoaiRR0vhhpT-WUycY_CrASgAFIVUworOF04fHznNAvUIdwfV9_raQH1_jL5L_zJWhDnMrp6DAec4hDJYw7CSMsMFueglC0xbZygtGnxiladfe_mnLS07PBd2jv4KZ5ZVSoIhAZmk_BQa_CdQcwH-JLHt6_CORd5Ve0ZHuDDZB4r6OOjW8V53sO6RbpEa6QgJJ2peVOywcaLnW90aDKMBpYKF5WbwTfEh0WsMUFqoOLY140exD-FdAxwCrxJ4SMYLmEQR7hACi7YSDAoIE1m7xf9lDXbl0zg179nJYYLgDkMLIyOxtki8MVOLWY_fSCFDuqzpSUz0JwjbTzi6WhzI1cAS2pCk9rddCvqhbMjeNjPN-MCtRSaUb1wtN53DGkHGaecW0FwwdWIziCdciRi3504m54hjIRfTneT6oMHi7Vs43XTlJFWCpPniUIymWeHi1vXALNAqaZbe2muLyuLZBk9HkVFPfES_cl9VY5II7Z1SI9fOcCEbqG1pGvJM7Q_H589yINr5CUs0FJIHobTYemeUoSH9_6Wf_JvUZECZef0PLUKlK3ntXV6Tv0Qh-t0nSlxo4jjQHrM3JlgpijZjYaf8WFpI5rxnVIP0KfX0osDiKZdfZD3Jrt3URAzK59SS3lVcJ9dbutGWV7bIoFWHvr6hBh-EpYBUSgSGKvyGwy2p5L4PZ0SOQNLgA=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/PZ0mIokR3xMClhm7ZllbxZRHJGGrIiupwJ3V6KnRmuOntTudXD1SgVFdSAJlMq31aNH_aDUok0PhKN9wD-qu2nBO8dGiZmr4hqhNAT6M5CE9c6iAxg9W4vrxNSXfeT1PRAXMDEY9g34ObRt5WdnMIBNb77sVFjQPOUzozV8PyyvDylX-Te4Y_51sR1P55XX8Ps1QKXlppaOxFVrkUh5D4qZvGUDNvGa_fQaOqyAcz6-S0DHqPHXX8lsffMlzG1TmAJcOC87HHGvfQRFHGrUUUjirkdQRwGvGRJevUtFCQwXHTKopkhiRUf29T5Vu8iOpmw3aHkmQHwHr8KJJtK4_tj-PEARekw6jgIFX3pVcPkepSKNEE04yz8ziVgDQodsWr6XloS6i0ZHjFYOpewHkOhHpvzwycHnG93sZUVOzC7VT6GoMHIfSnji-MWmTl_5nKotcAxWdb7zVA8J1FaImgVBn4o7mY9WCByWnh3LmfZ_Xe_GeKRpx8y6rpEt3oIlYxzjevW-kSx6nIWc2srOBlAY2zWoomNRuW_ENqsunB-PZeg95VJ1PUeLklng8N9IGSg3BuTlmdeUV2JQ9UTggtHI1AdsXej1Teld380dFjdD7fyeyN6lfSCq9ayD7xJ0hl23wrSvn2TlP5fUbhaRYJWkR9MqpcZ4Rwf3k4ss6zEQIBFiitZibvoqmh-e_7qfiSiZAulWC9BOJj45QeW7RmgHPvjXRq1KV1-PGGE2KxcyP0a4AHMN8PUx5muc2ugDqU94lMEV39Hqaq6G-az-0_xt8rAeK_vrvYj5-GEWo1WEpATOFpXCCt2KYJ3SF-KUfsGIw9vB3EFFTV1OVM6OY253xKzHGsg5zoFPIhZYeZrbSCvFIDUbXvqn7M0Wc3tO48QPOuusEnw7Eqj2XFCNnYRlRdV7c_XKzQ2BgL4DhbJ2I-zRfjg=w69-h86-s-no?authuser=0VhrAS7ctl5bfth0rhZSzDiOE5XWw-eg9iuJkGUc3nFeMLX7mVYGw=w69-h86-s-no?authuser=0',
  },
  {
    id: 2,
    name: 'Vegetables',
    imagef:
      'https://lh3.googleusercontent.com/LELMsEgCA_EXOTb5b_wcncCoRDzFESDD79Q5Z2Apvxkjr3zJ5LCR8mN6Dr5uiIJyR--hkfZ-FIY-wbK9lWx9m-XIdOTPze3hoEGgq2cCLGcht0du1yVjxUUZp0mrDsuwhMZY92mWcDCBUpt_gY9lzzjkFZkz_f4JxziG928Q7_3llTQd45dqvwVdbzn3GTw85AKcCBXM4nJABtjJJvadT-NauDi_NGAovHc15unh3jU_kxed2Z_6pHWnd4g0SvvspJHAJaoDzq85daQyThjHutx9EoRKkUCKUyedTVTaO5BN1YbYEk3_QeTMTod4MRDaR4BhuCpk5BFDyp2P8xM5u2Tlsj2yIGpAsToXGFSaR8Z1fmwxpbATWngakF4TUJGUHYSYzweOCKnPKl-7_SITVGnPw5WA1hDEBxUp6YH3NNiuW5NfnT3ebj95kthb5Z6cXzVfk0sZCZHxwRgCue6WqPKNVSUxf_RbTlg9YTvFvXLvdFRCt20SISvQstnsCJVYiFysoAUJ9EhhTx2CF92HaR-HfgkxItT28oupiAmUUyfV06nWX9XjdFOEMLCqM08-73HOXkfdXhOn6OSw25A3Vw6fef1gfKYbN0SySSGoQ_OwGQ16IVfzKX-m8zlDOhnq9VYuvD5P66mw7gQwryXgk5PCZ0o_C0o0VlPs5J2BXAACkuNO3JmPUkdy_R-fasK7ovoFh7WcCCDbq_6OkDGhmrXc2ekOXPcgNXfCyAF67XpkafHSHcn5b44wocYJqEU3gJfpVts51SHIRUkeipBZM1nEMcQnsmnPwYKHg5AL2PNeF6AjT5_06QVH6p9yKaC79-c2JUFykun7s5-wbABYLpLRaJe8haZqG8lylEciuaj36x3qUJuRDKjtw3mfnRT0rc2BUqP1Js3nUM0UdIO2b6KQcHWCP95NidIv5o_BsSMEADNhRQ=s100-no?authuser=0',
    imaget:
      'https://vi.seaicons.com/wp-content/uploads/2017/03/pumpkin-icon-1.png',
  },
  {
    id: 3,
    name: 'Meat',
    imagef:
      'https://lh3.googleusercontent.com/v57eKqVrWVrBBir7ThQZX75Z_1PZRZxHOA7w0DgEu6n17A5Wmzx6ZzSVTHxMXGB8tOBqKVMpXtjNOgxlQlAi_evxo5e0ZpVKAJdBOoYh88851saDYkDSN8qbEn0utED_C8A8_0JFMd5Eg_tOOqTCJ54zMTXvMRBGexj1eA-X7v1CBnk6BQ-_Pb97U66Gt7N1_klO9bBSflIhk_4VQmNUEQT3DkrVT-VgeJEcV5RpVJfbNGS-4LNESycCoRvtVq71WFKrWsShjXHIIbXSHAI4YvqT4hZj3Bz-BpvR5caEmebuNx5_4vRvjNvrI5Zl7oZygA-NwgA6CljkOcZdLR2UgkuIJkBdfq_2WcoN9nnOUaYgksY9kpCl7pEAUQwg6X53qTnK_FDv5wPpv_GLba5-WQnIFqswVqWLHXZVyk92qFfHFJn2P-odji8MVhB7Yf-cFwn6Nu2Mbthi0FE3uk1-NujcqN7L7RXG0eF4I2Ze1xgOvMBO79qsQlH7Fmxn7St7hjRFtMTCUi3qk-vZ1ZCMWqjSpALJxGpGWlvmOVczQNE5ICVFS1vNqfFsWhL11tGju6295bL-Vc6PSKdL_s0S5kLjRElgqIU37TjF44q92USd2KmiG0HRhF5Y6NC8bVrceVla7kc33pNPuX6POn37LTeiOaEjqKTZUHRo0cAlqyI_HwOugAQfQ7hrICk7ISp_rXwoFdYi5whm7Aa9lB5xuiuoUfnV-Lj8OI__zyN4T_tT1l47hoe1LdhXm4IncxzJWsSsp-Tm9RNwQ_Hl4uPMBpB9EmuX3af000fzFDGlIQL_XGAmjTAqZfiFJU_oPv53SZTjWVah8_oToNMaJt40AgZ6MYhaQEoK9bvdz4UJXLi7i6DPZ9FcvE2HyvzYhj8Mu4HEZQ8uP90IG8zsnH7kMQZ_6VGBpXzqwVSI_OFJzIxOXFTmvg=s100-no?authuser=0',
    imaget: 'https://cdn-icons-png.flaticon.com/512/3143/3143643.png',
  },
  {
    id: 4,
    name: 'Fish',
    imagef:
      'https://lh3.googleusercontent.com/_P2OLCCqVbu4iQlLKj_k0_iBER9mPugNczenNp1jHXylh3oN4uMJN8wmE9arIlzQ3ZWKvVVjQXUXepMs4mJ6tq80eUSC5-0763REKeV9zSX5DETqpSo1c36pqg8o0jsxHbO83q7rwdQKMkb7UnVEBonJ0Bi4erqpN8SuZS0QaWffCgYGMMdGCG9q7VIe-vuY-ZqwfGL-w2oJpt7Szj8LcUT9ZwelkeTdhpWaMN7HBGly4OlhVys6uj6ZVFydtxwyqMuJeooT_dwTfqaoM2DoS4DZk4eCXcE5RegwQe85WXzeb5R0swQbeKxpHtZcoyYVpJEvgehjeGAWaKSfRjNN5LU5bE37UXwwHsL0TXfY0KDnDjiwu8-fc3NcK2EdmSexziLlJUJEJSNyx_LCbMPgh6tR0Q9xi_fO4S9HRrl7_tathrLgpBgYW38t4Y6pKlhEza4C9H0Z33e-g8e5ugX2ZjgVW8Ve1hn1a70nQwzuzohIRMCzd0XuY2blHXltDFeCyAxzMEplxtXcqzZrusr727A1sQyd_agJI1zebtJM7ACLCtJdO0EZwSuap_WZfg1T3vLy1NY03x6Yrm2kAfR0D6EkG4ZSN0wSbtcqWV0yLtHYCcvj_oE1k5lsIXAyqotNGDUkWgaN12KEt8-u305N3RRcQ--abJuUULi7WNKk4-EoGpBPXG7hkXgL5-lzGjnhut1wvlUKxUjlvZyq2KBSmvp04eRXZiHttfRyS0mLmFJG-hhO-TAhmFF7ezD1ba7nAh1P1THYBr98IeXqGbUsGv2uLhSI_YREhETS0_zS_euV9IE1WfG2Yc2kqU_iE_r5e5q-vAaov5Wezbe0ILD5drUf4O2DOe_AExsIYwpJRqEqZXfbuQpz-L0XSlgGhH_kBhB2o5B_EVILofqhH5v7G9-yIBwwVQ3eL5FxT7hsVWfRPzdycQ=s100-no?authuser=0',
    imaget:
      'https://cdn3d.iconscout.com/3d/premium/thumb/fish-3485498-2918611.png',
  },
  {
    id: 5,
    name: 'Sea food',
    imagef:
      'https://lh3.googleusercontent.com/NdSa29Xm7I-NkLTAblAnrVNKMblFk_cpOqXZih5dX_fR_dyNJmK28PLLj7VoC90DqVFnFk3Gf7WD_jGl4dF0tAxM08KlYZZnFO4X_bimgPSQ8y_z3HxIMk0DcPD8oEarHJZo4pqEvzf4tj9bpqzwCPn6KhvWznZ57Ja64ywSpO68vm-pB-SpNVOuEKMddAo4Zf2rqriZcGh8Gu03Ts5Y3pZEuV5AoiODWHfXtDuEQbFJ7e9UJSnIiMJAdxrQagyv2kH8BX8NSnW1OxcvBpTtvYPwdsfXvhwW3U6Kl02cAleocfCnwe1NMmaYqWD1uxUDyjPPcPpiWsbSqE_LAlWdEzLzC_XcRaD_cxv7mvU8U7q3OljeRZUn20ij5L1Cdr0T-B6lrpO7yrVOjgMkeG3OFNfRo9qN8Tu7xzp6fVvYH1nXTCb64CGueYqUSa2RnhZprBxHvRYVfvc7gt6en0i2oVyD9ZEMtElu2neOVPZW6fsArnLcYebzyChtyIC2wcMcE73HxZ66F7uUbyF8XqvCIJtPNOurwmJn4PElRKBbbCFriHCrwMeWBbnYCwtiWL4y7eS1CsMSe5QZl2UkU-NGnWeLlqA9bJSPY2HBHZovZByyQGptPOYVqp-b_xz07RExL6EQL4B-xT5SzbrT2V4BhIdbeEBToZq9BBCRGAZFZ6kDSlPzsBW8U1CHtj8K0tLhPdotyxIqlPzdHBnYv4Rrk6yI3zqQpR-oc-nGiG-1Hafg0Ty9rU2wCuxIgqiOarKNvXoO1CUIROhgcmHpPMp2iVr-4dc9tjyoVq6Cge9UuEVFRqmkJ3L7eS01nkMKj3FU0J99loBO6Qryq_DncSNvieawGykti6G3KGiPqfw_OB021e4-zOs5w-8N6NvPT8zuQZUSrOmQw6Xqi_hl9671IRMBtPINYEuDgHNFG2_-u3lyKD6-2A=s100-no?authuser=0',
    imaget: 'https://emojigraph.org/media/joypixels/shrimp_1f990.png',
  },
  {
    id: 6,
    name: 'Juice',
    imagef:
      'https://lh3.googleusercontent.com/fYU-66rYVk7W8kBc7Hf7loYpjHRYoN1U8pfxaUDPBAns4rR8dv1kR1U2kmEU-aBo5HZ-bFAUiRsQ6VgS4Fk4EucEBDZ9u0q_3sDj7oL3elsDEOadZbQv-7dsQb1Kebe0RR7x_NV3KE3R0Ai7uxAV0BErg9frL4FCKapNSjKYFmNHt50biF0guh2RKv4pqRzef8qXgGQkFEeIbpY4hjSbCirJMMC-zGzMrLWQgtXxvXUObtxGmZ93hIm84-jJ56Y9i1Co81IQVXwJxF_ZqInXNrR1dF2KhghTHftETFAzjrFFxFPGT5gCe-YTe8XNPTYJcxVRPnahkPq2TJfSKKRnC684Y5d3wFody_ww0AnNTnJAwkHw7CeoVcSO37WNDpmYkER5y0daoKgpDiT5XXAVogn4Jb4JrUgGPiOhOaOTpyT1KMqYpS5qhipIxH-jq81HiVHzm-8kFrinT0PwdhpccOqsgksIS9nw-xG-XgVHiQxYuTr7hmkG17-ab-SNBhyf2qdICrnlUjk6japOeMNvRuuQqcI6AC2j_uuQJwN4wddZg4KmHPHBt3Nr5PKPTpFSaH8cz8QngitGeJHmixPTHIA54raJ5ACgAOEMcBYkLRrYat3vi5R67jIev_LWlv6U0LJu5ql2uheDSuueaUWu5MAaRPiBNzstE3jn_SNRN_utHTSH9SWWtyZKLZjmpRWmExA34tOqXyZbOJpCPoYJ1_RR9k4ginl0N_L0JQygUPcNM6lwm5n_8k59s8YRI0j5z-RINCUbmZd4y4p7rNbGAMvnEJV-IEoyfH_uHKKrnmaDtQgn2SKBRKNxalTzh0ldM5CAp5bMIsLNnjP9J9d7mlKVpv3xA3Md-svw6GvxWQUcNKbJLJKLtsGPK-TQLe3SRfCKPc4w9gBP6_p471A_ZJz5BgJZNMbm5RLaY5hPA2wQ24SnRg=s100-no?authuser=0',
    imaget: 'https://cdn-icons-png.flaticon.com/512/123/123432.png',
  },
  {
    id: 7,
    name: 'Egg & Milk',
    imagef:
      'https://lh3.googleusercontent.com/-dsltKe_fGdmA2m1rpXb66OLTYpqPIIWhzEfIp4sfjunJT3uUgVdegSzeu5X5h7k83eM2YrqSDGSYSSWpKL0PBL8zBbg5qCDZPHN57P1BpwJqo6kBIrwUqS0fPG8WGPqBsXI6Ztki79URBxm6eJt3faiyjSUkdfsijIL4N-ZbUx59eSPphnWRh1YkQRKSCd6W3FqlnFqYHiWwrDw7CZLRg-gpSqv_6J77exy1AZhYiRrq-qmtYjvvyXpFDcr7V92hRuT2S7oBGJtK8ufeufaGkS9babEIH3oAg04-wdHHCELda1aXPcVS1eVk-oTJn1hd_6w8CL61vYfeOxkjhX1zGgSg0hjpoxpuPXIhew_WqalWebisTKk6ue5geulLY8iDP5OsMEMWPqtl6gzNGY4NRAtxJvWyEk6teyFRw1gvu9Xdxco6Vrub32fdLnEXKlukQ7bdJlkcNes0MScdja6NTuIGqYoidEcMoJBPu_l8T4jKM65j0VFwCf54DGFRWb5czMYylwQtD9sqRb-e1draS2Jn0zSFytJNcfXfPCz__6i0smj2hey-LARRKyYgwl8u18d3_U_Amu37I4K9cuTgRyaCU_hnYdFaLsMwxvJITwt7BN9O-kDQ0bD2hLuYpMvXDuCsC1pkVDvp-1D8VkB-3SbK26hTXZbEUgCSly7VeYt5UtAISIQdPzlgYUk5w5i538rMSqAyDSBQWbR2wy_z4DHrtCqo0yoA_SKnghlxJw2fEerN6_MEyXpRqHotDDEsYQLh-MbHiL97C_c3lH-frUwZ2_0OFLc-hZEKYTZ62qJRZP0QIKORbpOTRstfqdMcgloTOafMUmv6jRx3pg_69USelToWK9p7WKMyX31M5KWSTuzSIxEsWMqq1c38BjaXxO-l1BCy8Mg_cYEtcx0xwT6pgpfQwJKcUT95b-sRjEao_NHXw=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/wtMPpzS8A5YyDBG1PfU5VJkei1gAW1nKpBt-IgFe7CycmF2O2J5bdQZrGSm589r9X_ujF1It8ba7hM-0EjnOLLsA8JtTPv982zo2B8TeeR88rmhjv62toDFeyJa-W3e44BOorLgMkrL3hiQUCsKajoECwtjWNhYuALyka69tgDIheqCJ3ja4WTyzMEM3_UOIwYlGmLR9ukdi8CuuMFE5WcyK-kPtzs6dfDOeQB0BDElUOYERmGzsQ-ygvO3RQtgG-trkzwsXOM3sbYlutkZjOlYMxaEezPdAjwPOS0PtSoj3tOjH3ZumwvEkMbChdHCGYoaou055SJu5c9dJpqkJ7ym7e0owXeJ_Jcy4GgBQvPVzpuh3OThdZJNlwvQiEm3oGs-jLA341dtftwgeS57hkWJfmjyfwifzKlclZKWXu7W9iL1h2L1hQnlWGhPW8_n2Vz-QEkRFv9nzQTHlavH8spw5fBEHAfuokq0cuM-fI_cLXwS4XwoR0_TFlaSB0ooyNUiNl03DhWh4Aqn_f8uXJENkhsUxnNPHpAXm5yzrFRsJbk_FKtCl19h1rXTTw18YfdsiFUQHzivh_YW3kA2CTpHHq_6jKEL8zU622s5nuN_aIILaMYXkONbwdNYS8ryQl19MY9NF-k80lzHbA19md8P_nZjDy9iOlioIim7bHS-HxvSNkN31XdJ-v-dp-LvOxHXawaMGbLmdy-9yR7tcpLMwrg0V4jjThxrQ5JWmz1ENNQQYX3tVpHwbxNfSiRJT1fjvC2AzvCBGiYfQO-K1LBxGVpyOIzQF54h4wmWuy-QUb-a934ubfba9CTu0qjHJlZ8YKmrQxEhnVpFu9gcbl0ptpvklRkliYjko1ac1RMqvkxzkwZknnk6PQ5t2o_oAqX_ZZGbG48ZQTT7SzkSVeidksMRjLgz8u48EJuizYDkwsEPXNQ=s228-no?authuser=0',
  },
  {
    id: 8,
    name: 'Ice cream',
    imagef:
      'https://lh3.googleusercontent.com/VlTJJBavF2mfLZadxUrs521n_Q5mFb3tvhtK5Vg6bVUbAjftBMS1WOXuFaBTbES_antpnG4ExKrqMsV6FYXJeE3QDxL5nnapuRWyGm0QGDGcNGupgU7nt8sYHadFCHxIFNQOQELAuFgW_Hi3MUJNxwyeAgTxrFhWQaHzM2cM9zCM2bafoEDFmB1WIXhe_XT6Q2ahZqKp123LDoUJ3ardKB2uVg-sp1PufsXLKKMRmRSqlFivEgijdvdfT_XVKxkpH0OBSfzB3Dsow2GUxj9qJ-noO5gWZmFy3QKsze5pOSRj3a4OdvLdLp4Kz7AIQcE8mxwks-KZNG9X_6d-ZemB7MjORzn4ejCQ_nLL-90Q-leHC7ysw-8c6AHpF9oSfYvbIhwk0Pv0WwVCJJ3S4GCnFKci8hSARConyCNrUPXSPu__myF2Vpxq_rrB4RrtUPW9nqY9K5kg2kNEt9920Pect8XKe3aGG_5KDVFgWecup5kh9uxu7xn1H5LIJ4sBuMKFwhYMmNiN0kI-mHuURrK3Lc94vqSQIQZj-UnSLAj4BEmw1ndhOQrS8QyRY-UArrVv7cxW5eSukwSvGljlzgBUMAtLU5G9rKkdL-KzumVKjC6zq_v5LUQgQecw-Lmg3PosEuIKT35HPVJBDJQRCa6PQe56De3uibpCFWFpVIrYNd6yfIaPeuIYMrkD6vuzLTMS0bFE9t4qWDEEbdeIAXuNC57m7SSkyGh61x884X96qmX9Sd_tusyHuY6WQv_8pEsjiXeG7CJV1RZL6u-SYMNcOHGLFxrRdGpnU2lk2NnMn5JtLWK39DlAcitIFRG0e-cXl8wIdM-BIy0b5eCQ-V2ZeoQOh5spa94IeoIv7vHfZajzNRbcJQqFC3CdWeO6ACHTv0NoVB7DgK41rr-D1e6di3TeCdiaj7TJMaS-1E1rgHfSc47vSg=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/a1Cch4E25R2Hcoke2oy1uGzQi8C9glV9UuD1ZhqQhMjpwrCEhCG28U13JilcMmqkjVRiObanIM4PnjW8Qt_kl4Xbi4wRAa_WtYO06fzK1L34iI_tRdRq3dbTAgVlHpCwSKBX8rpHenQyWJF2kN7seoJQaKUR8Q03w0HS_HUntrQmCbCoR4UCcsk9oDTrSkE6zyemH216QFlpO2rSwrHpvdUlr0ZdsUX42maShSgdnJYsz33vO0uX_JuBuxEsNH0zpQ0mDrCctC4SRwCyJnQ2PRUC2OZOdpQyEzt2ACdqzxuT8WssRP8H2PODBamcWWOgyiQ_E7pAivps-aLViXkzVQtAuXtLITDIPIFpyTUPDxXfv-UbY7SLpyP86ui3v6plPMiBn4OTbqtvH-nobOI-A-F6sEXlSxj7gcMX_7vHlLcoGTCIl9N4W1qJFfEnQ_S1sdWZVuXh1pemp7h_aNmBkt2LkuArGRRdGbsXX-dtkd99_dHmPQ7zcB7V15AW71INjCoKvVrfiURDPGlbaccS5fACxymbIIx5fVcFNF13XEH2GDujaTTHPTNd7nxcd3NruaMAzKocbUfybx7fpg5RjIFLzBcCd_KvVxNZ2k6BOBJm0xTE0GJ8IQHaoKzi9pVYT16QOYYQAxEXrqGTQT54FVvDLCr0I1PFvxzqla6VPKjvPG2nXExhpxP1M0ljegy9dYW32r1JoR_3Zseag0sHCSQaQl_2E3CLEQR2YegwbRpAg9rTnXB0bggXLodkcEcDCE-G5uiUPCOVRjc8Oi20fDnRbNj-uK-S2OgoYkHORqwIS0uudN_O27cCzFSxo5riwPDjlIpNcjmUbbYnPw4m98En13GX80mTS0OtUDKMkF37FvImtdYrUV8IlIB6oel0LKTcCktLc7vyiyQqvKwihl5LDxIJGygSX6GMZ51vHJ8D5qphhA=s228-no?authuser=0',
  },
  {
    id: 9,
    name: 'Cake',
    imagef:
      'https://lh3.googleusercontent.com/gYSzYf5D9mOrPqNicXEwqui7akhG2z4XS-E4UHMblDmyS4DxEeQtMp0ZZepdzNBKrF8gUz52HRxnTVvov5uUGi89PE6aKsRTv3Hk_DTSB2SKD4uwZ_OfJhbR9rbR1uQRKDuVRAsW2790VSzdjryhgYeDZOyAj41jGvJdU2yhxIgNUyup-JGyIi3FAvbkmoQeBJH2TYr_GTdu0Ln2eUlfH8U0SGjSNEcZbOVXEYtTFrvylhv5KnEEjMRU7jspgW7KZDQspVWLPdsEl64fJO_S7kTMjgF7gSRAVXd97AqOdrbsCuZ8t5tiDJEaOKCfrczKMFXgmkJvvBv56NgBdcZ-V-qUVfjn_6b4aPaFSN9lj69Ds2aAho0Pz2axa0dSzuCPz3MR8OkRRukoMtfKlRn8Y0hKCCqydS500053r8YruQWsYsBYvM02vyaBua-sc6KSFEJZutF21NUR2rtJ265jDvxmvGE_djpuTp-FdV8LDO-KkCEnNM6qVz-cn3EyJ1WKAaJ4CmYasKD7JAJqAFQAN9k6ko57LeX79tTylXynVHn3r0tL4jBaOan9CV6zxufFX7MRI-YtMAYWyVeqT8IdUbmWmR3Bj0ztHzRqbD4MJV8-54Nu1ZMqOkMiJHI90n_iM-r1YyHNUnspeAmumD0pj014NBTHxaGgYfqJkUV6vxKD0NZS42Yf7k_5AaMYULneDlenSi_NxmXZwHmaFkL41epOsSlXKYxhT00O94TybIHmJhjrHvyXTkfob28n6dMjHMatUct7TQmaJELZyhKcwLEZmQm9t0Sk3svw0uaDBBalAPulGtwSqhDdzVuI8y6N_NgD35DjuCqBRUnHK-na3FOlEfsT4HsWdIoqyhvRyFwioz19ILgSdfggk4ocvd-H9FbyIuzje3Y3jpcMwnCnnGHCA3frHao4Nxi_S3_o222W2s-URA=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/CCDMYZOvcJ5FIcJBVmE_u1cI6viqofh15RN2k0nUDxq3kOkUOKatUuRRLFGc3HGN6mcJ5aXA_ib-VV1LUY2FMme9JRm-kKu3xbuG5bscr08phkdmx_nmS3O-eGVTY1MZa4xl8syb-OTpA6OguOAEu6VFFeD882knLpyiI5LU0zcK_PFrPeK8qGFZSymSBnPy5wA3bos9QESZLPJjyTnb3KdXZDs0e5-3BGgzDpfE6XcG1B_wyo1CQPmp-WilTy03mdBCWBIXwczHD3buedoKpIffEEcWIhSVcvLVOjJmHYcPP487dkovMiWrs0d0FMWTkxVHMs0FVuolhpGFSidbKhLiL-M7_6c7FvIC2vyT8K2ZtodagmrFg-ghZz8efC7ZFwomGNZYt6F4vSxb8isI46lnbGf2tHfGvD2XdKxaUDynJ-aT8W7WmxQxBO69MZqJa9tM4C9v5XM4kEY1xaLbpweJrPhPwsqBL5Z_jpDdqfFMQo7vN8lDShswkMs1tKQoXiqCFqrolbrEcS7y5hJraV4Hl8zzX_wQCTi6meKzRdy47aMEnxGJbDqCsrrd7dPttTbdNOuz9AjSIKRd5P63LDW3aEJSyqI_hN6WvbUy7wEk8fUPfHJEvf1xq-8YDpwp_taEPjS_dELPxdA5aj0fKGY8Etzt3gxv16xRML2QL_Z5f0R0fiSQBTfRKs6-URfKIcljXzYSyB6EJuu7AH2FhLOipl_kW4jW3v1IcA_xOtfghpY8kLYmwgNYh2dpvfzBPnyD0sj7mTCeKR-BQrY9msxndhkoljwCmTgn7K0vltXBpHOgWcvp-VV6UUxNGGmqFuS-uqi6VPburRmBfDbcAzwknfm647tmzJlbxdruMIEyjaaoewkHTjB78Nu4u3Txb0fKBmYoclA7mqiTlAhLaP-5Zq-QyHabkSLJBLW70kFevLExqQ=s206-no?authuser=0',
  },
  {
    id: 10,
    name: 'Drinks',
    imagef:
      'https://lh3.googleusercontent.com/NZ0Efa8p0HW8eUrRcki2_xocScT7CIlLrUZlnEDtlRga-iBPOgptuUrykMDOLx-Pre78aKb4pKH9S_TufhCvwOx0VoujreGwTkRHFZzbXeyK_2XhpjLNnbpLRBX7dH8qK5p6Wc57xmbTJFD_WJb56_yeMbPFq7t0Axv_66jKaZjlhaGHoq4LcWA2FUx9xyEXBoI1o-okdETXuhZi-0SU7RU0G1Gon8cGHsTwvaNoIXuoywbcFU75lmpaINHgQOI8TGQQGZWrfIeVU8UtADB2fcRk0sciMn084zdxpklYGe0I1o23XjZBRd-yuS7OF-augZKs4gt1jKEJq9acDHe5twbuEhZTPsiznv1aidB2l1JASn5gI_9M9jV9BYB0EyMfbn5MOTb7G2NE1_lQglL5j4rrViWO61Bz7LZlnC5SsoEwbOjcDEn8ch4KFTP-IbPKh4XvDQDAqk_fHVWX3g21RpwWAdT7IncOKKdAw-mWBwFtf-XAKo0cSHDfeUulDBRPMj2C4lkXxYUeCOYMJZl-wczWLsfy19K9hS6u85kAQ2tPxYSzrSlhXBU8HHY4RiEADo-3stg06RQnZVgsqANLMU6DeSLUlU2W6AUIOBotELKMqqo7Calx7KKhO8VSs9B7Ord09m6Q3wFtq1eOGAw1UlYlxT3Zi0q0y4Xlp11ZiYodhKXtHxeMzfnjCX_Jqh5or5GOgyP6PAeb2yU55uY7ruO1tMvEpw6yKsfCqWtvRIsRpIavuNJbb99o_zScdEE6-gH9lsgfgWZF620lIOhc3Thpbjpu495fcJKkwbOkPPt5WgBwjJlHLrDeL_YNzMjXbr3F5H5p8Uuu4MTL-ZJZ83VIrTHHEd4rZrqQH2cTQ7F8Tco8f2gNRDAKCOB1W5-csXtvSMdNsZpDlNabkU-2UMAgsFCZ01chUd_yAYaVKU18FRfSZw=s100-no?authuser=0',
    imaget:
      'https://icon-library.com/images/drink-icon-png/drink-icon-png-17.jpg',
  },
  {
    id: 11,
    name: 'Wash',
    imagef:
      'https://lh3.googleusercontent.com/ZkIa71y-d_v5QHptcDHNvHFRSlBkuXJvD9YPeJCdros6-1_WfWwm1cPYvH1x6LqVWAfA9E4acdGxhdK733bvN4yDy4OSSejqvTzhT7XkPyrMAS06DlPHXq9-hZw4R23-bSA1cUH9g_ptPkBAyzp3EWYgjkzoqvpVKvRASguG01Dz276PgpbWRhfGEv5XevrNKn8xPwn8kmyM9utbLWzJArHyMjMwGtETNQ8m1U2BKwzjfz8YGjwAE7f6J510n-P0EL4cPoSZekLJzQAn_ybLQW7HFap3K7unL2ovauHggWI_kOiVVI_EkqR6cWSqopxlReTClyaLGokgQ614uLUlisRhT1PmLx7BSZrTfKAL8D272Re7T5KuXY4zltGjWGyd39g7J1tzZuswIzVb979PPQtPO_cc2KFzGfZO-GL8vOwzNOpeItuEPy0rzMgYMu0_r256yUjjrGZp1Ne7YonwsuqVdB0pmbIsnO2MvAlEFKaXE1fsQWEbCqG55HrN6BGee43uvaH64cdfySE_kV0JCOkVIbei50W0jr0_8Nj-kZ1AuERekSVEFnVKWWdEC0YCTBFV2huJRtrwJ35zEQyaHPSum8q0hxOQyodIJKFaZNY6nA42B2H2e4YDbkHTyjBK6TI9L36FnQaiDPPosV2CZTb8ID7tFDWThoCcUf5YvjU7dnFbxlmPQH0gPWWbOkdA5n_PPd-YWufEN-XGhhdVvwjMc-PMMlQtSJCoqyxS8NqRNwzWrer5mEYbR1MVF9xSawJvLCc8p4ce3Nh66YdiecUqdV-v_KJb-hDdq-HdU2y0PTfxf_uMMCiOdBgmvJWC9E-OtV0D_3ZIKdH8Vdm_pMh66-etOWUkuIZW8ThQiGHOdh4YWneXOV_e2I8i-zMwo5NcdsFb6dscsXw8blfAhY-Mtlo6PPHCkAadD0tyjqz1u55z_w=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/jM8WTahT79m15xcvmEDa4RomWUD4BLuSPZWvvVyCAWwBL-GjocHPYaQdAr3jlYPE_ojdqeE6IKQHaAD9NLZrQ6b4mHoqEOH3ILsrjc2O-DK5KVfpOH3VHfPuvP3rxXd4r3Vho3HTtrrigoXiLAYiDdEh1NXRhK95V1zsGAFy2xaLB4LQlJHdSVHKCCu700VpRx3h1Z3uaHlh4Ngb9h50UeEzkEucEfZclHPPYeC7JvkU6iRRNxe9TnupyDcbOxD5tM4ZyHqVw9sfqPxSVA0Ei1898S_tbqbmKx35JFLdSz7pW-jTwsQsrUq9c43udmm8XGeXFFrS0pGb8zWI88xtAm4b2iSlP2Q2Cy1kq_7s-RZcO7hu93dj_O-t5_DrbS1YEwfIGyvDH3iz1Pu_Z86PhIYP0-97BdaamyvkJEBPmlBZ2Iz-QkVtWzjH7eIuHEI4aNgta6qj0xM1CgxStvKzxr5cMOlLA7MO6sskhaHIgyszKdJZKfDaehcBF9DI8cnSR205S2vQFmJsOdm0LPZBfx5eShi1v0oMoOu-88G-K2dJgJ5DB2SValw3_gWKRGCMof8X8gRC8hDbvpF3vOe-6Tp3VFeVdm1cOxvh4eiPyDxV7gv91LXGDWgUebZ7TocWUAelIENqla2JcnmEcxc94MW_PN8pTa08898WvY32JAxXhGmTG8rifQpL9L1B1gSll_GSj_NIGEeLhxJBjuVKOncYwmzFZUY4qNlYJ3tx7Fxqi_SHin4DRb89aEpqqeSn5trT2-uJYgDr-T1Dtcktl5t-zMd5YFiPazz7AoBDp37cKRBllO1HETta6xJC9tn2CJ6_9kgy41fEy7xrbMX0dpoF2wJNwkDHd8Y2a99jCkgJ0GPXclUf2t1feZnxr8i9lV8DH45aZ-N_YlR72yFvY4PWYzJd17HEcqKPtrvCa5QW5w36tA=w74-h93-s-no?authuser=00',
  },
];
