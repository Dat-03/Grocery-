import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ItemCategories from './ItemCategories';
import ItemPopularDeals from './ItemPopularDeals';

const Shop = props => {
  const {navigation} = props;

  const goCategories = () => {
    navigation.navigate('Categories');
  };

  const goFruitsMenu = () => {
    navigation.navigate('FruitsMenus');
  };

  return (
    <SafeAreaView>
      <View style={stylesShop.viewTitle}>
        <Image source={require('./images/location.png')} />
        <Text style={stylesShop.textTitle}>Lungangen</Text>
      </View>

      <View style={stylesShop.viewFind}>
        <TextInput placeholder="Search" style={stylesShop.textInputFind} />
        <Image
          style={stylesShop.imageFind}
          source={require('./images/search.png')}
        />
      </View>

      <View style={stylesShop.viewCategories}>
        <Text style={stylesShop.textCategories}>Categories</Text>
        <TouchableOpacity onPress={goCategories}>
          <Text style={stylesShop.textCategories2}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataCategories}
        renderItem={({item}) => <ItemCategories data={item} />}
        keyExtractor={item => item.id}
      />
      <View style={stylesShop.viewCategories}>
        <Text style={stylesShop.textCategories}>Popular deals</Text>
        <TouchableOpacity onPress={goFruitsMenu}>
          <Text style={stylesShop.textCategories2}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginStart: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataCategories}
        renderItem={({item}) => <ItemPopularDeals data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Shop;

const stylesShop = StyleSheet.create({
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    marginStart: 14.25,
  },
  viewFind: {
    flexDirection: 'column',
    marginHorizontal: 17,
    height: 48,
    marginTop: 20,
    marginBottom: 30,
  },
  textInputFind: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    paddingStart: 46,
    paddingEnd: 20,
  },
  imageFind: {
    marginTop: -33,
    marginStart: 16,
  },
  viewCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 17,
  },
  textCategories: {
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 26,
    lineHeight: 26,
    color: '#6D3805',
    marginBottom: 10,
  },
  textCategories2: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    height: 22,
    lineHeight: 22,
    color: '#FF5E00',
    textTransform: 'capitalize',
  },
});

const dataCategories = [
  {
    id: 1,
    name: 'Fruits',
    imagef:
      'https://lh3.googleusercontent.com/AfGbo1ciLKPY6UDGAADBkv0Je7bnDWwv7hV37foWwnCaNxvAcB1SaR_O6Jnm0La1vkd5RAcDbs72aMI-YfXuiIgnZ26LFz_fIBQ72BxIhV9RH4Mq1zvxAd9B1DHvfk_AgkngINxVlQr2U52q3dSEadSey19N_N6iUnf4S7xLoJg6Ntk9LO7aEAXw_Fragsq0JB71nF-a_T90cegEL7rQuMQe5BjVRx5pVD9o8N5WAYPJmcj8lVS0-Ydap4WoarXMZk7U8Hd-IwR5BGKyzsCQNADfO1QoeO9_hHlAoBglOibRFIzgSmIG0TXkNeG7HPhBihxKZ5x1OlKdoB-aJMGmU3XWW0qE4p_YyrBetBlF4ZWxz1gtkdTkHqoCdBblb9uPvkt7tI_iNWcasWvjGC7QSZG_7K_Bb0HeAvZIMHIGoep1rFshglqS7eCK2f_WwI5civhH-T5Gu34Z-Zrwd4WcyOCdFI93K36WHwpWgQSR7vB_HFvuEp5anmHiURB0ifR3FgwaE6RabM6jy7klIP9nn9ZpsWNZkXenbqvI5xL8pthbEpBZ7vnc_iKVE-F4skKtTbeMYKOpLQQE-MXzJ6DSKzZN64yySF2nMheXcXp2hPtX5ui9iAkPqt7WHX7sBEoAFyx5DgOII4cegu2Ez5janPLhZel2C9-QNqgGWgiqplwXqYpRoFnp3J-iyAU4ERsFszkhXzNkmRfp0eVS6ZlxEvE59tHCZGqIcO7If9Y1YVvHhabd_JrFfdjlFuvQo0ec1P5U_IOA3BKdvRobIh4X-CzXdHAmX266zRhZ8HyVjdj7Mfh-WvkwAf7gNDkn6RLaKavWrI9EG692nmG67ZnmBpuFxBS4SynyrQXl1IFDB32AViaGc3F0l7rb-sbV9fkHOixwnk7tgKhq7_nw4XY8lBwJ38XDqpxILoe3Z64unvwxC69uzQ=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/Os-YNqEVVRl2r0xoc9wk9XXPbGPniUE4tOUDMJeSYu3QD_srBFQj8qpezb1HNIesy4wScOYCiPiKcNnxBFI8ou8Jg6qzlM4tw4AlbVOs6ZhTq6zVd9-8Y8mjEp8HoDLhENLVejDx8pJ5oHOZA0Uf2wwd6k5Rn9QBwALqs-Xxy1IiiZKOCip94hH2IQzEuZXiQ7RmRZ3jVN-0FPmo-VBZ2seFHsFKuV__DOMSnX-wFkvqDF2PY3WXWdbg1Wx9_TT9A3FQd_AB1Ovxt3U_qDsLfacYsXkYCVu9JRJdTMqkqz9GhX2DL_4JB6iIfuH916jbWUl8knWN9k_8nC8n3e5Ff0UGA_PQ-Wkrvh4bcL0Ly4Q47bv6nQ_KIf-dvaPKYHXMDnGJdlvWLm2vJKkeycici6CBjo-yIPCtzGh1BilMB0xXqFuwXCzaq3Jrtl79gIAYBeS0pI1ypuClII_PcuqyLU1frHqzqX8n6llLy5JqWrg3qZk6B54QVnTJJikQrKXrjL9GQ9o7fkgUXMgf6Uq1o2cczyFQnAPfHI5DXnLkN9iBPWy852OtcD5IiVlHqXQyroEpgfPE6gVRwD1X8A8_qXr8a_s1KYe5JQ4kSrNaV3ZT7oIv9wpxHc-rLMi51ToiI_1oBT_7wAznYbzVAQPKHSvK6U6KIMHNX58_TtNJfM_2wFl3fpn6kgsLn09BOLXAPRPF53oJcxtWQFpVaxQ9LW10T3v1K5D6VM7fHc3nExjbywBeZPCeKwrU73oTQOqrQbuPMpnxNEXtogAAxCqIUeZtmhlHRlFDKn6ht2GIPu41seWAlvaCDVxWYrHEoEY8s2WrkAs6SgyPp2qEt66O0zeTwYllM1Y-lQmpMkiM5wqZBlPkYlMRGmbfPqIkMtY79Aj4-dVvwBdjRWHCUzRnM13uRNq0-eFdVVJeROfSzn4eAjCLxA=w69-h86-s-no?authuser=0',
  },
  {
    id: 2,
    name: 'Vegetables',
    imagef:
      'https://lh3.googleusercontent.com/a1B0PXJdQU2Kd-OnZFiTKg99E09tKHGAgFOGDgRg93Gv-rrxelczgh-uVBL-Rw3Fuq9b3uu7poRufyv2iC8zEsyuAUJZ63TTW08xkV22f4v0qRr8UJ4jZFOVSCFhkOPwtv86MGUVNhjFUmUPOSVuZQ_Lfflmm-2aNuaBDHiFkhVg35PO594NSeTT-mRHZj5fL3N_7PRKitGwJY0xJSG56A2J9fv1mCTf5z9C8dn-5eV4tKY41cWjLWOsSqk1O1z-3hzBGgzwi0uaid-e9mRSdPYg9XHz0NoByGZ65oKIkpdZ7N8Owcw8NLAxAj9GmF_KY88ugE8Vm0eYdhkaztKlwCGBc5YDHFYBx_iDckFQkq8bDvqKjxZH5d4ZP0fEvhIF5996J9s7JRam_JxCLYOt_XZ1lhZOK3eB5D9CnVoAA28tFKHV9LJ711mgBoOEMDd5n3cxFN54Ghuhrv-BifAK6iudM_3Ydarqo-tEfR_MnyB_T0Wgho9_QpF1v_kO4QgtIGjC6_6hN-5yZfS1Nf_GsPZ8-t8-w0Pextmiyw2krmumpOi-13Mfe2JBtXIeRnPs9q1fLT9L6MGq-EiNEy2xFviXA54bRTqmy-F0K5s_xTkECQh77mss-u3qAJ_HulL4cKrKgswXZ23YW2B97g_aj3EYvKeVQKJgUiBSUkHAxOYMyVaGvERWWVpvh-teW9U_g5Cws09PiCvSBDZuESwZhaRj9Zdu6B9ydcIOwefXXRc7n2XArFzED6CGZKg8uN4AKlA602P4ZvjHJMMzgPYYz5XKcfm_nNvVBUAno-nTQfaCwzhb8rT6SO4b0OnJ6eDXqqQ6lETh6KKOtqoSLdOb0Xru6nn8_HvfwN3SYUNYbP-3uUezqQTiflbmuVRKPFd3CixMqRtfIV5qvtBFMDpeXnCY68rAISY6Rba-nhQps_TPMR2wFg=s100-no?authuser=0',
    imaget:
      'https://vi.seaicons.com/wp-content/uploads/2017/03/pumpkin-icon-1.png',
  },
  {
    id: 3,
    name: 'Meat',
    imagef:
      'https://lh3.googleusercontent.com/P5zlqoZ6tH0TZeHQwHHPX3u_rMXgiSpVDpANOws8kUD9g6e3RaLuST-GiwZTFhfa5D-aSclgXjpqekyODv9l6_Z6dokw5boK4q2D7JwWVeVmow_GedanlobX4HfuJuUXKO6v1uLMc4F5hQmhz_DzwlnKyhIADbcByEOjREZrEHNjh3ynZg5hqGHIsjPZtoo6WKGbmoE2h-w1uz_0zle0TRy619OSo6Lrt_NB_OoA3ZDBjcbgVO6J3xvyH1smxK_hq0KR5f85DVJpMnVcb-EWh9m3cfChaRSZjMInlcEi0WobAk4-YeMrufMqdPZpInch6JQxzccQLx9lxV3PysQcHVpXJM-6BcRjA6kkpoqebo5aRFANCC6vb99GpqycHtRaHn8l2JbNqAzlxaXiujYCtPem0PAmcwMfgwAOFPHKPIZQ12do_PzLaP58Zn765-n2pYJHSgQBWmoS-yZ9bLLbuy04hgWdKMEbm7mJa_VmbIlC5SkEPEitahc4XwcSNprBbCQPVUGrSWgFgjkTuQuK2ap7Wa0VXpEoDeaEp76-79JQIegZ4AAKjD3tx6bH0Z7ExDlKrMXG_81S0Gx0buoA6Jy3N9UzDKQL-UCQAxiLNDQa-d9IexStthEWeY8l-ceObDROtbn8aUAb-tHQLDEJLBAtHAexmbKdgDOV6IiuK-4c37hDZ_io6B7i8pHoywCmPUTbSymd4r40R-fwde28TlD0Jvq-2e4nVLd95qaHZfPkGO1xbNYYUyz_n4C4dqv8NMWSukAvGUOzYJIT03sAmo4CFIiugn7Ao0OHMUQu1q1apq5wfrp6-ftfoTQjsBrPr2axRi5hk2Hd1aQpA7GIhh9Me2jU9iarAK9ZVhXp4zpMgPIG2zjWef1Jaiqm0a6EUvhjuNODEqSwapZfbzhMnp7wZoLx3MwoKFqpjIScZuflk40yGw=s100-no?authuser=0',
    imaget: 'https://cdn-icons-png.flaticon.com/512/3143/3143643.png',
  },
  {
    id: 4,
    name: 'Fish',
    imagef:
      'https://lh3.googleusercontent.com/8PLkLwsdB7AV7buPMhBqWu5Y7svb1thKfQGKF9oMzTBMmQtgp5sXCtvd3pNocIfLStRGs0qJbIiCWApG4mgkobHI1kC4qFLGp4glkSX0Xxw3gHd8vqXJQvr9tnRoBATvWH54FLIT_MQZHc66_T9LFofmnPXZwkjsR9TlAxDCdfdpOLhreKXRURPvkdOLWf-FN9y8bE_nKymduzsftVjIsZbhLh8l0ROCiY36S9BQKn8rW9k4zGkrXGebhpvI_bBSp6y2nGE-wsA6sdhde1XWPQJnilmo7H1BWcBES8AdsFjqVTWDHWdB5LJd1xSMmJG9FB5-gHBsPe0BzoVppnNT5HY_iCSMpIbI5rZOtsXEqT2H3TfqSyucS1BxWgCrgZ00a8WWGVqSP71EaqocjFxVY6ScwJYI48YBLTiHP07Oc7FYV43Q8nxjw4gYA1v1y0Cam4S5-N3Fdn3us5B6kp5fdFTOpCTiftXjvPwQf_4fOKknooBT01srz6a1TnJsy9OzMGwP-g_VPW5EHJMNyKw1AlldJ8pb5yKA_GeVnhVcdWSA15-9_IpJIlX7fica-nQduiHmw5kNgH0PGLNVeXYFkmxR8mayRrFe11jUoRo54psatHnsYqY_kn4j7Khf0h2kXkZPbvOuHQ9lN1es-CWWUifTeUYqBEr-iF5Zv9g7ALj-Sx5ao9Xht1JTrJJAHkMBmA1dvRsO2BobiVKawybY-qWPgU9eImLKHC-zHnrulZ25m_36wO3jKqUwe5H18dzXmL6z-BS1-CWMrExXre2OHPCgo9c48JzOYOQc8m4-iUk4boxwSQtUcf3WqvweXIUPGsz3ee5BEdeFVaCVrWS6IXE8neqbp380F1hzkPLZc6dLuN4i8x7BbFoHu6JTVQJR0HFPniLTYWzhGIywLH3CaUeRQvSyKP5DBhS9_R7SAG_IYuRSDA=s100-no?authuser=0',
    imaget:
      'https://cdn3d.iconscout.com/3d/premium/thumb/fish-3485498-2918611.png',
  },
  {
    id: 5,
    name: 'Sea food',
    imagef:
      'https://lh3.googleusercontent.com/Zw_EKGC27PqjUdWDpEqxw57GnINnyDP_uu3IUCo0urcQ6lBLsD1g53TCsIdaH1vs6ojWaeWul4479RrTG53-rJiH5dSXcO5xyl9jed2T0_z1ekwKFhpgWTdMXKKlM_MU0VODtxuVefKMUa7FKptH508-UaovlSguSsThJK8J2_9A8PBoKpzB6yShPa-6ZK8ARELqbgDPTMXCLm2H8bzMFvhDsK4jBEqaqk58Qlg0-pLpOwWr15ZNtPvpV5l6IEK8f5Tt6qhthDrMS-Q8BICgYxfQgLD7INXxjbKxYBIQbXrlESakPxjkkyNwJom8niu9oU_vKznChC5OaAEZ6REmZaciQWEenpvk3VhVd3Fowyx7d_CfI-8vR9JNS6W4GZOnwMMNS1qkIb6jgAlhY7W-aHTPr76nAyRw9B49ksE9e7s3dI3Izg-rY71zsewYJ-PpRMkN7rpX6Ttx1o4BhnBy9dk2DsQcJDCB_C--omOV4MuhVyxFEYfh649FN0iSwzU9oqp0NcUQOiYXkWiXFRv0KVRodjvvajrcOAOHuO9ZomnIvElsYnlpQJddiOJ6dFZjFA6wo693iBklevLX39oSPp4PeUIxtiehoPdJ65J-97DqXRPNaYJwNfEZFSFniGlojOgzOE7NcE7wVrckJLyAjP32ewnOoPviKIYExB5ZwymoabzfZ9TN1RaNnhoVqnu3Q2bDVG5BBoY3HNE8TKvBuhuGAt0MIUydKcLyhpqoxQ4Hv6KkjDs0Pd7df-Jms4VEonaEMUEncCLdjYvJ2oLE3AGKLOVWnTtbx1Fg3R4HhxJkDce-5BJfK-M_u6kzrmyKEJ5OyM-KZ3iMkSQ9uNFNjUutN5AI9LS1dKbAeVngDyKr-TyY7tVvUpRAtNH4LGu8P0or3m1dhZR537iQpk__DIBB_KbDRvETScd8ORztchwrbF4mNA=s100-no?authuser=0',
    imaget: 'https://emojigraph.org/media/joypixels/shrimp_1f990.png',
  },
  {
    id: 6,
    name: 'Juice',
    imagef:
      'https://lh3.googleusercontent.com/Zw_EKGC27PqjUdWDpEqxw57GnINnyDP_uu3IUCo0urcQ6lBLsD1g53TCsIdaH1vs6ojWaeWul4479RrTG53-rJiH5dSXcO5xyl9jed2T0_z1ekwKFhpgWTdMXKKlM_MU0VODtxuVefKMUa7FKptH508-UaovlSguSsThJK8J2_9A8PBoKpzB6yShPa-6ZK8ARELqbgDPTMXCLm2H8bzMFvhDsK4jBEqaqk58Qlg0-pLpOwWr15ZNtPvpV5l6IEK8f5Tt6qhthDrMS-Q8BICgYxfQgLD7INXxjbKxYBIQbXrlESakPxjkkyNwJom8niu9oU_vKznChC5OaAEZ6REmZaciQWEenpvk3VhVd3Fowyx7d_CfI-8vR9JNS6W4GZOnwMMNS1qkIb6jgAlhY7W-aHTPr76nAyRw9B49ksE9e7s3dI3Izg-rY71zsewYJ-PpRMkN7rpX6Ttx1o4BhnBy9dk2DsQcJDCB_C--omOV4MuhVyxFEYfh649FN0iSwzU9oqp0NcUQOiYXkWiXFRv0KVRodjvvajrcOAOHuO9ZomnIvElsYnlpQJddiOJ6dFZjFA6wo693iBklevLX39oSPp4PeUIxtiehoPdJ65J-97DqXRPNaYJwNfEZFSFniGlojOgzOE7NcE7wVrckJLyAjP32ewnOoPviKIYExB5ZwymoabzfZ9TN1RaNnhoVqnu3Q2bDVG5BBoY3HNE8TKvBuhuGAt0MIUydKcLyhpqoxQ4Hv6KkjDs0Pd7df-Jms4VEonaEMUEncCLdjYvJ2oLE3AGKLOVWnTtbx1Fg3R4HhxJkDce-5BJfK-M_u6kzrmyKEJ5OyM-KZ3iMkSQ9uNFNjUutN5AI9LS1dKbAeVngDyKr-TyY7tVvUpRAtNH4LGu8P0or3m1dhZR537iQpk__DIBB_KbDRvETScd8ORztchwrbF4mNA=s100-no?authuser=0',
    imaget: 'https://cdn-icons-png.flaticon.com/512/123/123432.png',
  },
  {
    id: 7,
    name: 'Egg & Milk',
    imagef:
      'https://lh3.googleusercontent.com/cn995fZ1w-OXgMb92ol2a56NmPCJ7aYhavZ17-ZyAaGdXw6qZQMn9yOuEW4IQn6VrGUTSPkulxAXPubKGtIA4-n1mX9-25RKFaXaUAO55sH2MTckN2LvmHIM3HfeGZAxg6OylDc7o43I3B1GHWM0U2NozACSpBvSR92OMTvbi_NUAsMUHkek4wfjaWeZv8VRN_ALWHI2Z4k7XAaQdrs5yK2xrZxxAsUokkpebX9Axtj6yFTOfkXkXr2V4cw2dh3lgREfwrWbFDgCP8mkXu6ZYY6qaYHiK3wTuGDf_ZAxq2Qn8y3ItnWyu6mRnHap6KBDvnxOKeuvxx4HIvapWMyDymnC9zg4MlzO7JaenUY0bHVo1EDEZ4NplR2s11I3VSjPtjdb-8VewewLGIQORUWaxnKXGQISJ4PSDnMqs35fkO0eicjmuFsJGHJSeXIXeY09LiaDpB83B_qjQCVWf41pEObcZUaxlRX41WIpI4buCH78yQ-ERWCDTQNJlshb6ggSQJSNJzGQWgpzZcu1K-cXOY2HLkZHJ41FgyN7kkXFnB_S_WawBJ6RbBLpXppkRk1iiD8tb30cBx7Ov43SJ_8e73B_64h8QZCIsMTNcrIunf7k_me5KQdnisGieBg7ff6lRQgwYaeZ-HiAYQ4Q7tEdoIDhfECl8d5Oku3wzy1b9GvqnVMyagrRVgY6hlkTZcF0dmn5DOn61XSpx2oVDvQns5OelQQ4aLosOqg0yO7cBTph3QvrzGEcuM1hix9064aLPOE5ylTrtgsbN_2gtSw7Li-R9xwoJ8hshzEmdRRK8SwdUJsf1h5eeJQKJEqB3PFWlfJRR9Ql0nM7y3Bs35DmRCpdZ5auRcy0mwLIszDvPtVaIJOixaXLrtaS3q8fRx9OKUZpOsJKUyjMG6jG7x_d4svfuFmjKjQ-4yj6JRqtfLGb8pk3lg=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/5JcwdNnwcQ73_A_6haLr4tiML2TSYUX2vpwNwfkwCc07VZek_q6rM195a6H56hcL1Z4UeeO_m9Wu5g8on8ojg5VrFh4X31rYMfto-BK_njWh9PT2TNHrJfTVby6IMRSSZuNgA46Q7bNLIw2oD0dvCp10AXsOEay3QzGT_5wESoRy30SgWOZdlR11CENqesRgVg0o7FQLadRS1Vw3h9w5jaMpj066fIQiyUeDYUlazmI_zRlg9A0idoS-neGyJangJnRHUQJAEFukDTR6xMxKfGGjKJwE5KwdrIM-A_Km6n0wVVwvPwdB8QFB6IGXDIGm4EEFr21lnUIEFguOESgyGanHqws_o0v2PFioy9viJw83oXJmw1hgrB3fRtMkIh-trYIM8HsuBrNKFm6R3R2GgjZ3y1iKhPmgSOSFo2P8dIJ9xkxVEqjYCBxfnpasWt0VLEqGA5kAX8fojYeoJwc3Fd43BxQQlqFwvoPWb6OacJ6B0At3CUYkCnzzLi2obVlgBF5YnjxCXewdlOSpOzXdANUR81q9uSsTMyVayZn0IAiTKQboParfIuKJor_cxYR1xqekclVupTEw-X-hQzCk4_8uEE1C1W4ga_dLHCx8v6G5eS8gPJEAT4ga7Y-cgsAWZ3g-IKvjdIBQG8QKNNN5fbiS17-8nyH0ycWhAAMdR2DMcXTNuQu-ypKKuGQf-F_5QcHqjpCmVgIa6S-rUFI__oJmkgkSZ1opBOADjr0dRd2OwnZkgnzdVHGe-YBVHT1lcDxhMbZFsCA5JNqzjyLkTKg825uFw6raANPreTj6T8EqqsEvOPBAp2oXJwS_Dk3VjP1l5W56gAFkt12Bbp2GT49Hy8Rn7w052whenwxzM6Lz_xAS3RWMerwf50UcNOjThvcZaWrTaJXMMku4fwyiYug8rUPXxYFTuz6moDwGF1xDzbM4Xg=s239-no?authuser=0',
  },
  {
    id: 8,
    name: 'Ice cream',
    imagef:
      'https://lh3.googleusercontent.com/Emnleb_UZo6svSFfLca6Rq39CzEt5XFin-6u8eV4-gvDKPR57mub_ZA7PZyaW5yJ3QJsIYHzQayfnzboe0qMb9mAeXqME_YTfYHRSatBxMKMifmGZUAPoWE_n3yl8t54Mg8AyGbi7UNBfbvgbwPitPMDqlEvOdGfB38mcnNtXWDOKiv5mgnz4SDxkG41zMWGGGlJqhSARJv2cVJ7dJiBjVHX8UZYNoLRYRgicfXDulogLj9P7YOdQbEm-QwHUR3MuGz9Hp-iTLAxjLAKTt17u1MjOiGLcx-XXbK1UfKOMjvFEm5IzcpLgube-ut5jOlbyc6O3Jg8WZJ-S1lPKS4cRlyZARpWqo8opdmaioxW4Kg6BlAhk0Z9hdcb-GfKJmkp9YmrRqkpeF3cpFDmRgFK7DrGexQHp75ZDrFa1i6uH2d9EEM-kSxCRAX406Xcj65QnFJ2xC2Fv4Cy3h51TwcGnStrk0mVJDQphWqQLrCYyc-sJOQzR7kZTpew_fNiWNWmOy5HTtyV2NzX2T0YfaehqhJhpP-uDsUxiFnjaE1wGVPWm09L9-PhnIOyyn7mWVTUFNrjxH-NsL4WL8crOoPa2Gj02mZvvm6sV5_6NdGxPEx6913k7bkuglVaX3VwLh-GJhK_szEmJSsPRXGdgMnn9k2D8UdUHPz-RyhIt8cAukQqYSnYeOpWBFqlZ2VyZCIh4jbPDfKGh5Mc472rgcl00HSsAsx_R1iWUbVzNNX7p9xN4V1IEjpq09R0VWo_ALKZhI8Wk7AxYd5Hjrb8yrSZXJ3z2x8QNaghFPQtB7-1XKynfc0eVXXpfQqp3z1o0yn9Guoxs_zWgu8av76MTI_KUfC2lrCdxyswNjlONiFA5sd_bsYKSr8cVzGJngfbbxxF1-MFfyLxKDiDLvCQeNKrDmw2ZvAfAG4eo7fGycVAcwL4t2KcPw=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/PAIADlimmAtkIiqv6XOdAfj3ipFOftXOoOvg2ifL46fKKkuXKzwVpbhJDnLmqDt_ZwuQ3WsllyeUBSok-Cs4YONd0Q9ldHne3iIPeuWtUpawhKeo3ZEoMouhHLqzzz0S4NXT3lhhavB5FfUmzQOvng4h-eZOXEH3TbzLlC1duKzlAKtzONzIo5U3_xX8arD_qUjgZAnflThECGtm5AYiD0xAGfrjIixfJnMI9I9WRzgQtv9nTJqq-QcrBfndvXBy21gK85qxqepzUkuQRx6iK4Qy8EkaRv4mZ3bJiL5CbIWvnedqo9sJD1bW-0nv2dLwz9YQPX2W3l1T6khjKHLz7uqn9S7VxBRwwgjLRlvzWZLsjnUkME2OEFFEC_OoHzI-7_4KRMYSw_tMJhRpuE4ymnKd9xxwhCeynP-ps1xc_g998hvbDzJbvDqA2Drc7-KZluNHZfgUfu68LYVtiON-Qs4BLTFOmw8XFbH6rz022eIIKH72eDw5fnDip1p-W1sNeKQRvgBrz0bEDs_1MroTtHi4kMG1mf8AWIXxGgWqu-53D5GNmzzAvyj2Bg9uxdAGOa9Gd0FBpDe7RrfsMAYJRq4L8SLAfSB25hUE7Fy_0dJU4Zrbi31djSf58vC0BWpE3G6OpVrRcYcV-I1mLsKeX3mYrThVRC-plvvLc8uF1QnHUGeCysRIWwZLKYy9aDXYd3LdQOa2iwVEUPvvMvdM2BNk-kYZUMT9EsnNLnlxUUvMEqPj0GMrRhWkTQC8sKRiyqLu3_e6hTRVZ4kwAHpJXuN3tOLRin4U4UNKPwi61z2Kl9ClwYbl-T6gg1MVHJ8lbrkrvsqR5ljFgjLzq2GKuLYchTuZwgLqeI29QQ0USR4HaMpWE9GAGgZp3Uebq49el3OBCtAvc-Aemwr1jmowocnltlIid4iNMnzC4Y16yK69JvrfxQ=w240-h239-no?authuser=0',
  },
  {
    id: 9,
    name: 'Cake',
    imagef:
      'https://lh3.googleusercontent.com/5bVbB3sj8NQPZm_RVNx63WcRYyp4AMOuwCbBIlcNbzkKyUgDTtlmEzGE_u-2rpLZXIt3j6W5_e81ZvpHWfctZc3-bOYg6BQnQXp1CMsaMAoujZcMn3C4JWm-usuQUZqipUyRyqYB1tqRbBXFkDzcxkJwDs1_aV8aNDiD30bajtGQkXMUfG3xY4XDXh5A6-y8mIBzcqpusRQtorP6NzpnVpnbwp58eu3b9JlwXAynjCihVjqnLojcQHrEYX8Uc2E7XmKOQ2X5UM5DKJ79Nyj7rRqtqb-K4qbZBw2wVMZ60UAPiuqy0KxOLxnR_HxArJ_Wu-Khq1pmDtrehL4pBDFfg1Je_pQkDEvQvLbLmXebuEk0YYqRILb6FcaUOh0poUjmT9GS273XO3yBpk85fyrXxyaMMrMURDHQGjduEYtibhu1foFch5PHQLajGjI8R053pFbBB5hFIdBnH7V6sMMrgwfpP-D3JrhaDWVKzqHrutmerhBQkzjJfLWWEWP-zuPQJC3lF88zEMz2rVgtOz4b4bvJG_Szh8xrWW7r74dO1CezIvgcA25OPkYOnk7Y0IVw8LZ7H1IERMEvd6zkMwyX8ulzBshhs0QHULrXJfNpKulKd3pZ1sOT4HDYAjStR6MAdTILvgGuMH1YdU1rjE6R6ef8U-t_tGiTL6dVWqJfUvHFxmNGsCxrRSn-yU-16ZnXBM2lo14DAC2QlYzs8qzHj84c9ZdfKag5OhB9Gec_NZ-hVIOiryYc6jAY0KETtZqM6wY92-VH2twwTACcEUJq12ggRYnU642VT7nDMwBXXh0pTxFGJNUn7tOfndonTCxwCUCQSKIjykNXEf2U_sciad7YBPr9ZtWOnA9nUP5KTjKZVmxGLhUtkDTSMBs9BrR2ViR9q6py_KTcn8r6fGDkFGKe-DW7IYvC9p-kH8R0EAZPd9jwOw=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/ptP9BnNAF_edrsrRKIq8Qu02lu5xe7PrLr_0i-2ck-VbE6DA5f2RySFA449tdI8_Cqh8xg9nfYLDvdlNwQ3xvcP_wymFfFeK6H0dZVsagW4oPPkKVzvTrdgoe-K9Cd80aHK0SpOnwap3CBCEuW24qgZPokeCb7ErPVzMHRc2KKyPZNDD6otlohj-c6fvcP5nMpDxoLG2toH9DPCo3bpBoPNuGA7D-IXRWM3AQxGkVBh4Kpbp-WfK2J1O4Uroqmiy0QtcQE1Q0GqcNE3X42bMywAdaLfm07MIoLToqdhX1Bl0gMO3yYD6GcSien8Y7lWCpcVm4DfIaQ-Ye_oC3OU5PCBZZ80BLgJy_9PPbb94lt-f6Pb2djesSjDlDctM9CUscnVq96zbLWUViFL30SI30_1USJWmKyDK1C9xefmsmkCQgcb978NiQRcvwX-WsPT4-tnXryBfiz8oV1EZFjto6gFWh7WF-MW3qbxrTrd5jIb6hJ4sloNHh1EJZ8HvUMwZzVzSG6zJRhqBClp3rdji-a17L3XZ2AP8YHp8l7QYhS87IxXkcVJzoDvM3GHH3k9eDGXtNLBkRaMljgoH9srAXg8oYP1-Qr2JUbPz9oeb6w2pCXpXNrJdQ9aaeB0CSffBv1qO0H774kd2XVLlY8mWC405CbG7UQPhyWHJhZ0oal3Fn3INosJUsyEHQ7sUDAcCmQTVzPzA8UjE8g8ubwDPRLETIbu98IHKs4MHb4Te-c31cFWCWmnCTFXh_GZfkasp5npeNsaWCvAT7KdOTaQ9OgQ-nR7mIxjcxXm-jbJywLK1j0F0D8sRVFFPRR-KvUXw_yycUN3r2WFugCW_yIza-L5y8mke5ROhwT1NtADjLejMu_K9_iA2Ge_rfIfAcmfjVHJqZe7qYXceXFCxanO_FR3vgSztAWQ3NLihIg3DCTm-JGn30A=w234-h235-no?authuser=0',
  },
  {
    id: 10,
    name: 'Drinks',
    imagef:
      'https://lh3.googleusercontent.com/Zw2peGDUWXANqJQd-CTgtiACdX6Sn9tAavNvcvgViJMRwim8PYPlVZMEJi1858hV8b_IWAsHv5ciNqQdtUKd2kx-wskT0OQocZcoHPP6VIdm_gQMPm73YP4BtekomXjRRjAGFuoovuW1sdwi-FVONOJlnwlpuD4XnrkDfabHuaU7nxmrnn7Edj0sjCD_gqXxgm8HPKjYhltF7yLuKgeMyIEjeYvmE42xLmwICH2Sm_K7WJ_GsQgQgNgCMZYUYsymXVpwn6tipRFr_IWMo1xKgQgvdAOicveNRn5HLQQPMq2trHOAABuqZaJoup_5ZLeH1dXGCRHcqY7lVa4HB3VV-BkBPSzEH3UTRbcdGrr69zpZoldCPDGKrlemtRnY-l9Ae72iuIbU1-onXDNWTGiOH8LB_LBuU9Y5-0M6IpmZGRwr4D4vHMSfiy-Is9sOnydzMI7nzefTYtqCPGCMgewFW9FBATy5qjYYIcISPXBSNIXI9R3jDwteKp-wfGuDebEBfcUM_zBIWT43V3aI8O2t4eHvaKbM3v_65KqzKpk1BDrTgVKL_-50t5tXtzl_hRq6tVll-4AeA4BJtVyIGYxmLKj0kT8CJ-VWDz4XHAsa70TodSIyhZYta2miPeH8wvQiw_0j5wMbfAph7SUBDs_ea9hi9n7YxNZ0aIQbVr_FxweODeqFA_0OpFtFVJDgINyR4gvi6Dk5WXkWW1tz8qs-sxmm6TLX8-9JosRr98QJO9dKKUxCfyq4Llfpk-UNltv7xz-2bryTjaWeKUZhrtiMR59kK36yumox9xHPovFJmTWm5Z_k7-giCRH9jARP1eBM-NMVk66C7oa0JA4KW8wRfO2BcnioGYFHmTTsGbOtUN3uKuJ5rOPicNpxRGZzU5VX0sPVlb8fSKSAjufKu_pDN4vGh2py4NznzigUuYu8zCTLcpa9SA=s100-no?authuser=0',
    imaget:
      'https://icon-library.com/images/drink-icon-png/drink-icon-png-17.jpg',
  },
  {
    id: 11,
    name: 'Wash',
    imagef:
      'https://lh3.googleusercontent.com/8jABrsqQtqCgJO93Jos0joejg7QQ6Doi_yC3IcD5x_bzKYtC8kWtEpMlSAjlPNXSsvHK3tzcKGsWj6RHBv5XmRKi32en1VBurW5JwRcKr1ytZvr4N7RVIuS4Be_i6EkdXXxfxnKEAs9x9itmFQVdFgGT6pR9FiMWNyvuIbyGs8ZuucaHchwJXtLhlyfunjxc2O23GOCKvLOJCgRxa27NhPpCSrRJCA6fGrk08Gyra3Aee9iInHQw3aOdozqJ2RIWOVIvprfbfeC-834FuOyR5dmbbDQibsShxWjd4Q89EWOhjN9B5wfX2cWn-NOoNW69-OSzsjau-AxYz-VIwN8kymGCSEIAA71_dPWawMapN1hJ2VdMVvHN42ypnfVQWWTCN4qULXvieNyPxzr49buGDrdzl7ubC039nx0KWFNJqydRTKFe6GQnPnSQEH82VrNUYI51D5iWKHs93p2yepmiJX6HFnFrIMIdZ7QDv7lNr3zk5CeF2f805y9UEmvOff3k6E8Ammml-WXyONN-OFYvbMqtvX_13aKDuhh0x-7mSWdwlsNEh1cfawdKsn98dyIWFS5ZC3WncHnEWmvdng92nsdnySQg3JzF5SnDGFQjeWc6KfqTofCXxlFBa7S6HiuAt_1lvLEqQEVMC3tULBUVrPG0ICE5-B8GiHjYv0HCztj-ZXJktEIwjDcaBdI1_fcsjNREDPdLNin4rlUXLuI3a2XI6tnJIeRTXbKIVsJ6FIUXPm0pnvQH8xBUiI096YiQa7DaulTmB99HLOHv0KQ43ekBAvhkcAVPeQk335VtXVWWOJs8i7xifWYlbO3pwIluDJcG361t-AiVL5qYslZSJk3vFEIDWoBI9ry-m1nLEzei43Sv_NukjBeY3JGdosm084RGWulgIGszMLqxOOUgk1jfyg0zHmbalzs0LfZpbJvt9btQNg=s100-no?authuser=0',
    imaget:
      'https://lh3.googleusercontent.com/jBmFTctyEY7e9k6y9qo5Uh8nq3M8ZNVRKQvMIbcWBS5k0nm2kz2oQtPa3LxEeqmw8aVfpMX4wJOT06vj-OTsl15ZnwmgUVOF3ScUScVpZWVtcREzp6X-PDdZDn8Xnzq20xPohJbIaLCyATsQKjzkKm6LKQ99VcABiEE1AIdGEG9BDMRzfZnnwdqPps2lKCbVGfvX0wYH_7OPb3EvG0UpG5JQ9GHuO0YzbMKVxqTz0h14YqqNyVRRxdi3cm7iQhyvE8plcQCKBGcAsskpMxQQDeazbr4dY_ELcQNcozFbEgyaM6lAta9N8dumNEqIw7d0NdbfH4i_oZ3WPAocpk8PYPfJ5eMVMrM4Fb04pyXy1WmrZYcQIJzKRMwmDHD8K9MW3qnrsNYtooY0JyLGL3HbFTN2VYJ5W9gfU9uzbLF7KU49qpUuvtnTEXeXBUnSXIgPEuL-aYLvNftUrEbsrJ55ohoBTYA0TSst4iMlchKCa8VQFgI222lJTWFJoH5i_UHEbUofahi5tQ0KwsaTUZjEiDAxxIxMEDR4xJ1qvvqy8aQEw-G1NEHPzg--6wqv7if5y3RHQ16pQ7HgtmSheqqeeNCTUuroyrWSrOpUD79kzWBsrrigxE5DX_e6J_RUxsXg6nULbVOxRTtL8n7Z4oL0sKmhZqYQ6eAApyvn08RC80rly8iuBw12DZVbqumo5jqCP92guif5ILcntNt2FZbI-aVf6ol81Ebf3kqpU-WWmvl7l_BwIgxqZjgrFwqzw8bl-lKYfmOmEnslmS8fwDeKfrnoYtyECiROWydJAPsiliirvI806wPua-dxZr7B0k8wkvPl3vG6eEbH6wMuZyCdztqCzgEl5lxKtOXTwaYO7hjhSdgJ6x_yYUzDJbqvCP8I5_pUOBdRiYfk3E4kug4xIDdWW47quOzOybWe8z6SUb1N0ALh3Q=w74-h93-s-no?authuser=0',
  },
];
