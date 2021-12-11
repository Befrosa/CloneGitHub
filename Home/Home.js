import React from 'react';
import style from './style';
import {View, Image, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';

function Home() {
  return (
    <ScrollView>
      <View style={style.conteiner}>
        <View style={style.footer}>
        <Image
            style={style.imagem}
            source={require('../assets/barra.jpeg')}
          />
          <Image
            style={style.imagem}
            source={require('../assets/original.png')}
          />
           <Image
            style={style.imagem}
            source={require('../assets/sino.jpeg')}
          />
         
        </View>

        <View>
          <Text style={style.repositories}>Repositories</Text>
        </View>

        <View style={style.box}>
          <TextInput
            placeholder="Find a repository..."
            placeholderTextColor={'#8B949E'}
            style={style.repository}
          />

          <View style={style.sectionStyle}>
            <Image
              style={style.imagemB}
              source={require('../assets/Imagem2.jpg')}
            />
            <Text style={style.nome}>Befrosa/residencia_2021_2</Text>
          </View>

          <View style={style.sectionStyle}>
            <Image
              style={style.imagemB}
              source={require('../assets/Imagem2.jpg')}
            />
            <Text style={style.nome}>Befrosa/SerraBlocks</Text>
          </View>

          <View style={style.sectionStyle}>
            <Image
              style={style.imagemB}
              source={require('../assets/Imagem2.jpg')}
            />
            <Text style={style.nome}>Befrosa/Sistema-Bancario</Text>
          </View>

          <View style={style.sectionStyle}>
            <Image
              style={style.imagemB}
              source={require('../assets/Imagem2.jpg')}
            />
            <Text style={style.nome}>Befrosa/serrablocks-admin</Text>
          </View>

          <View style={style.sectionStyle}>
            <Image
              style={style.imagemB}
              source={require('../assets/Imagem2.jpg')}
            />
            <Text style={style.nome}>Befrosa/ProjetoNFT</Text>
          </View>

          <View style={style.sectionStyle}>
            <Image
              style={style.imagemB}
              source={require('../assets/Imagem2.jpg')}
            />
            <Text style={style.nome}>Befrosa/Befrosa</Text>
          </View>

          <View style={style.linha}></View>

          <Text style={style.more}>Show more</Text>
        </View>

        <View>
          <Text style={style.repositories}>Recent activity</Text>

          <TextInput
            placeholder="When you take actions across GitHub, well provide links to that activity here."
            placeholderTextColor={'#8B949E'}
            style={style.repository1}
          />

          <View>
            <Text style={style.repositories}>All activity</Text>
          </View>

          <View style={style.sectionStyleC}>
            <Image
              style={style.imagemC}
              source={require('../assets/ramon.jpeg')}
            />
            <Text style={style.nomeC}>
              Ramon Ives create a repository RamonIves/React
            </Text>
          </View>
          <Text style={style.nomeH}>20 hours ago</Text>
        </View>
        <View style={style.box1}>
          <Text style={style.nomeD}>RamonIves/STmoneyApp</Text>
          <Text style={style.nomeU}>Updated Dec 9</Text>
          <Image style={style.star} source={require('../assets/star.jpeg')} />
        </View>

        <View style={style.linhaB}></View>

        <View style={style.sectionStyleD}>
          <Image
            style={style.imagemC}
            source={require('../assets/Imagem2.jpg')}
          />
          <Text style={style.nomeC}>
            Befrosa create a repository ProjetoM/NFT/React
          </Text>
        </View>
        <Text style={style.nomeA}>1 day ago</Text>
        <View style={style.box1}>
          <Text style={style.nomeD}>Befrosa/ProjetoNFT</Text>
          <Text style={style.nomeU}>Updated Dec 31</Text>
          <Image style={style.star} source={require('../assets/star.jpeg')} />
        </View>

        <View style={style.linhaB}></View>

        <View style={style.linhaB}></View>

        <View style={style.sectionStyleD}>
          <Image
            style={style.imagemC}
            source={require('../assets/ramon.jpeg')}
          />
          <Text style={style.nomeC}>
            Ramon Ives create a repository RamonIves/React
          </Text>
        </View>
        <Text style={style.nomeA}>04 hours ago</Text>
        <View style={style.box1}>
          <Text style={style.nomeD}>RamonIves/NavigationApp</Text>
          <Text style={style.nomeU}>Updated Dec 9</Text>
          <Image style={style.star} source={require('../assets/star.jpeg')} />
        </View>

        <View style={style.linhaB}></View>

        <View style={style.sectionStyleD}>
          <Image
            style={style.imagemC}
            source={require('../assets/ramon.jpeg')}
          />
          <Text style={style.nomeC}>
            Ramon Ives create a repository RamonIves/React
          </Text>
        </View>
        <Text style={style.nomeA}>11 hours ago</Text>
        <View style={style.box1}>
          <Text style={style.nomeD}>RamonIves/desafio02-hook</Text>
          <Text style={style.nomeU}>Updated Dec 9</Text>
          <Image style={style.star} source={require('../assets/star.jpeg')} />

        </View>
        <View style={style.linhaB}></View>

        <TouchableOpacity style={style.botao}>
        <Text  style={style.tbutao}>More</Text>
      </TouchableOpacity>

      </View>
      
      <View style={style.coluna}>
        
        <View>
        <Text style={style.more1}>Blog </Text>
        <Text style={style.more1}>About </Text>
        <Text style={style.more1}>Shop </Text>
        <Text style={style.more1}>Contact </Text>
        <Text style={style.more1}>Pricing </Text>
        </View>

        <View>
        <Text style={style.more1}>API</Text>
        <Text style={style.more1}>Training </Text>
        <Text style={style.more1}>Status</Text>
        <Text style={style.more1}>Security </Text>
        </View>

        <View style={style.ult}>
        <Text style={style.more1}>Terms</Text>
        <Text style={style.more1}>Privacy </Text>
        <Text style={style.more1}>Docs</Text>
        
        </View>

      </View>
    </ScrollView>
  );
}
export default Home;
