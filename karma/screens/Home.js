import React from 'react'
import { SafeAreaView, ScrollView, Text , TouchableOpacity, View , StatusBar, Image } from 'react-native'
import TabNavigation from '../components/TabNavigation'
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView  className="w-full h-full flex items-center bg-blue-color pt-0">
      <StatusBar backgroundColor="#4863D3"/>
      <View className="bg-blue-color w-full py-10  flex justify-center items-center rounded">
        <Text className="text-white font-bold text-4xl">KARMA GECW</Text>
        <Text className="text-lg font-semibold text-white text-center">EDUCATIONAL AND CHARITABLE SOCIETY</Text>
        <Text className="text-md font-semibold text-white text-center">Goverment Engineering College Wayanad</Text>
        <Text className="text-md font-semibold text-white text-center pb-2">REG NO:WYD/CA/62/16</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Donate')} className="text-center text-white rounded px-3">
          <Text className="bg-green-color py-1 px-4 rounded-md text-white font-bold text-lg text-center">Donate Now</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="w-full h-full bg-white rounded-t-3xl">
      <View className="flex items-center justify-center"> 
        <View className="bg-white w-11/12 h-40 mt-4 rounded-md">
        <Image className="w-full h-full object-cover rounded" source={require('../assets/Banner.jpg')} />
        </View>
        <Text className='font-bold p-2 tracking-widest'>TOP CLASSES</Text>
        {/* Top donators list */}
        <View className="bg-white  w-11/12 h-auto rounded-md">
          {/* item1 */}
          <View className='flex flex-row justify-between p-2 items-center bg-gray-100'>
            <View className='flex flex-row gap-2 items-center'>
              <Ionicons name='trophy' color='#4863D3' size={26}/>
              <Text className='text-lg font-bold'>Ashar Jaman</Text>
            </View>
              <Text className='text-lg font-bold text-green-color'>₹2000</Text>
          </View>
          {/* Item2 */}
          <View className='flex flex-row justify-between p-2 items-center bg-gray-100'>
            <View className='flex flex-row gap-2 items-center'>
              <Ionicons name='trophy' color='#4863D3' size={26}/>
              <Text className='text-lg font-bold'>Niyas KP</Text>
            </View>
              <Text className='text-lg font-bold text-green-color'>₹2000</Text>
          </View>
         {/* Item3 */}
          <View className='flex flex-row justify-between p-2 items-center bg-gray-100'>
            <View className='flex flex-row gap-2 items-center'>
              <Ionicons name='trophy' color='#4863D3' size={26}/>
              <Text className='text-lg font-bold'>Gecw Alumni</Text>
            </View>
              <Text className='text-lg font-bold text-green-color'>₹2000</Text>
          </View>
          

        </View>
         {/* end of topers list */}
         <Text className='font-bold p-2 tracking-widest'>ACTIVITES</Text>
        <View className="bg-white border-2 border-blue-color w-11/12 h-40 rounded-md">
        <Image className="w-full h-full object-cover rounded" source={require('../assets/Banner.jpg')} />
        </View>
        <View className="bg-white border-2 border-blue-color w-11/12 h-40 mt-4 rounded-md">
        <Image className="w-full h-full object-cover rounded" source={require('../assets/Banner.jpg')} />
        </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  )  
}

export default Home


        {/* <View className="bg-white border-t-4 border-green-color rounded-md w-11/12 shadow shadow-slate-300 flex-col py-4">
          <Text className="text-xl font-semibold p-3 text-gray-800">Education opens doors, charity touches hearts. Let's make a difference.</Text>
          <TouchableOpacity className="text-center text-white rounded px-3">
            <Text className="bg-green-color w-7/12 p-2 rounded-md text-white font-bold text-lg text-center">Donate Now</Text>
          </TouchableOpacity>
      </View> */}
    //   <View className='w-full h-full bg-blue-color flex justify-center items-center mt-36'>
    //   <Text className="text-white font-bold text-4xl">ALIVE GECW</Text>
    //   <Text className="text-xl font-semibold p-3 text-white text-center">Education opens doors, charity touches hearts. Let's make a difference.</Text>
    //   <View className="bg-white w-full h-full rounded-3xl"></View>
    // </View>