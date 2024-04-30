import {React,useState} from 'react'
import { Image, Text, TextInput, TouchableOpacity, View  } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const Donate = () => {

   const [selectedClass,setSelectedClass] = useState('')
   const [showForm,setShowForm]= useState(false)
   const [showDonateBtn,setShowDonateBtn] = useState(true)
  return (
    <View className="w-full h-full flex p-2 items-center">
        <Text className='font-bold text-xl'>Ongoing Activities</Text>
        <View className="bg-blue-color w-11/12 p-5 rounded-lg flex flex-col justify-start mt-1">
          <View className='flex flex-row'>
              <View>
                <Image className="rounded-lg w-28 h-28" source={require('../assets/VC.png')} />
              </View>
              <View className="w-52 items-center">
                <Text className="text-white p-2 font-bold text-xl text-center">VC Memmorial Scholarship</Text>
                {showDonateBtn?
                <TouchableOpacity onPress={()=>{setShowForm(true);setShowDonateBtn(false)}}>
                  <Text className="bg-green-color text-white p-2 w-24 rounded text-center font-semibold text-md">Donate</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>{setShowForm(false);setShowDonateBtn(true)}}>
                  <Text className="bg-red-500 text-white p-2 w-24 rounded text-center font-semibold text-md">Cancel</Text>
                </TouchableOpacity>
                }
              </View>
          </View>
              {showForm?
              <View className="m-2">
              <Picker className="bg-white m-1 p-2"
                 selectedValue={selectedClass}
                 onValueChange={(itemValue, itemIndex) =>
                   setSelectedClass(itemValue)
                 }
              >
                  <Picker.Item label={"Select Your Class"} value="" />
                  <Picker.Item label="S8 CSE" value="S8 CSE"/>
                  <Picker.Item label="S8 ME" value="S8 ME" />
                  <Picker.Item label="S8 EEE" value="S8 EEE" />
                  <Picker.Item label="Staff" value="Staff" />
                  <Picker.Item label="Alumni" value="Alumni" />
              </Picker>
                <TextInput className="bg-white rounded p-2 m-1 font-semibold" placeholder='Enter Your Name'/>
                <TextInput className="bg-white rounded p-2 m-1 font-semibold" placeholder='Amount'/>
                <TouchableOpacity>
                  <Text className="bg-green-color text-center p-2 rounded m-1 text-white">Proceed Payment</Text>
                </TouchableOpacity>
              </View>
              :""}
        </View>
        
    </View>
  )
}

export default Donate