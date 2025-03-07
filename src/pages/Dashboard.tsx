
import { Box, Button, Image, Span, Text} from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <Box bg={"#1C1C1E"} w={'80px'}>
        <Image src="./src/assets/images/settings.png" alt=''/>
        <Image src="./src/assets/images/isiq.png" alt='' h={'15px'}/>
        <Image src="./src/assets/images/bitcoin.png" alt='' w={'60px'} pt={'10px'} pl={'15px'}/>
        <Image src="./src/assets/images/mavi.png" alt='' w={'60px'} pt={'20px'} pl={'15px'}/>
        <Image src="./src/assets/images/a.png" alt='' w={'60px'} pt={'20px'} pl={'15px'}/>
        <Image src="./src/assets/images/isiq1.png" alt='' w={'60px'} pt={'20px'} pl={'15px'}/>
        <Image src="./src/assets/images/logo.png" alt='' pt={'20px'} w={'75px'} pl={'6px'} />
        <Image src="./src/assets/images/isiq1.png" alt='' w={'60px'} pt={'200px'} pl={'15px'} pb={'20px'}/>
        <Image src="./src/assets/images/chat.png" alt='' w={'65px'} pt={'20px'} pl={'15px'}/>
    </Box>
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div>
        <Box bg={"#1C1C1E"} w={'1450px'} h={'80px'} ml={'2px'} display={'flex'}>
            <Text pl={'35px'} pt={'28px'} fontWeight={600}>Dashboard</Text>
            <Text pl={'40px'} pt={'28px'} color={'#EBEBF599'}>Advanced Quarry</Text>
            <Text pl={'40px'} pt={'28px'} color={'#EBEBF599'}>Events</Text>
            <Image src="./src/assets/images/isiq2.png" alt='' pl={'40px'} pr={'40px'} pb={'15px'} pt={'15px'}/>
            <Image src="./src/assets/images/search.png" alt=''mt={'28px'}  w={'24px'} h={'24px'} mr={'550px'}/>
            <Text fontSize={'18px'} fontWeight={700} mt={'28px'}>Bessie Cooper</Text>
            <Image src="./src/assets/images/profil.png" alt='' pl={'15px'} pr={'15px'} pb={'16px'} pt={'16px'}/>
            <Image src="./src/assets/images/ox.png" alt='' w={'15px'} h={'15px'} mt={'36px'} ml={'20px'}/>
            <Image src="./src/assets/images/light.png" alt='' w={'34px'} h={'34px'} mt={'28px'} ml={'30px'}/>
        </Box>
    </div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <Box bg={"#1C1C1E"} w={'1100px'} h={'800px'} ml={'2px'} mt={'2px'} >
            <Box display={'flex'} flexDirection={'row'}>
          <Text fontSize={'12px'} fontWeight={700} mt={'34px'} ml={'34px'} color={'#5E5CE6'}>DASHBOARD</Text>
          <Image src="./src/assets/images/ox1.png" alt='' w={'14px'} h={'14px'} mt={'35px'} ml={'10px'} mr={'10px'}/>
          <Text fontSize={'12px'} fontWeight={700} mt={'34px'} color={'##EBEBF599'}>BITFOREX.COM</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
          <Image src="./src/assets/images/ay.png" alt='' w={'45px'} h={'45px'} mt={'20px'} ml={'34px'} mr={'10px'}/>
            <Text fontSize={'26px'} fontWeight={700} mt={'20px'} color={'white'} >wubin.design</Text>
            <Image src="./src/assets/images/+.png" alt='' w={'45px'} h={'45px'} mt={'20px'} ml={'20px'} />
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
            <Text fontSize={'18px'} fontWeight={700} mt={'34px'} ml={'34px'} display={'flex'} >Total visits<Image src="./src/assets/images/!.png" alt='' w={'18px'} h={'18px'} mt={'5px'}/></Text>
            <Image src="./src/assets/images/xett.png" alt='' w={'64px'} h={'4px'} ml={'456px'} mt={'50px'} mr={'30px'}/>
            <Text fontSize={'12px'} fontWeight={700} mt={'45px'} ml={'30px'} color={'#EBEBF54D'}>Provisions Month</Text>
            <Image src="./src/assets/images/mart.png" alt='' w={'126px'} h={'30px'} mt={'40px'} ml={'30px'}/>
            <Image src="./src/assets/images/3.png" alt='' w={'30px'} h={'30px'} mt={'40px'} ml={'10px'}/>
        </Box>
            <Image src='./src/assets/images/site1.png' w={'972px'} h={'277px'} mt={'40px'} ml={'10px'}/>
            <Text fontSize={'18px'} fontWeight={700} mt={'34px'} ml={'34px'} display={'flex'} >Perpetual<Image src="./src/assets/images/!.png" alt='' w={'18px'} h={'18px'} mt={'5px'}/></Text>
        <Box display={'flex'} flexDirection={'row'}>
            <Image src='./src/assets/images/daire.png' w={'200px'} h={'200px'} ml={'34px'} mt={'22px'}/>
            <Box display={'flex'} flexDirection={'column'} ml={'50px'} mt={'22px'}>
            
            <Box>
            <Text color={'#EBEBF54D'} display={'flex'} fontSize={'14px'} ><Image src="./src/assets/images/goy.png" alt='' w={'30px'} h={'22px'} mt={'1px'} mr={'10px'}></Image>Social Trading Platform</Text>
            <Text color={'White'} ml={'35px'}>3,124,213 users</Text>
            </Box>
            
            <Box mt={'30px'}>
            <Text color={'#EBEBF54D'} display={'flex'} fontSize={'14px'} ><Image src="./src/assets/images/orta.png" alt='' w={'30px'} h={'22px'} mt={'1px'} mr={'10px'}></Image>Recommended flow</Text>
            <Text color={'White'} ml={'35px'}>1,523,151 users</Text>
            </Box>
            
            <Box mt={'30px'}>
            <Text color={'#EBEBF54D'} display={'flex'} fontSize={'14px'} ><Image src="./src/assets/images/acig.png" alt='' w={'30px'} h={'22px'} mt={'1px'} mr={'10px'}></Image>Other</Text>
            <Text color={'White'} ml={'35px'}>948,213 users</Text>
            </Box>
            
            </Box>
            <Box>
            <Text fontSize={'18px'} fontWeight={700}  ml={'88px'} display={'flex'} >Active Percentage<Image src="./src/assets/images/!.png" alt='' w={'18px'} h={'18px'} mt={'5px'}/></Text>
            <Text fontSize={'30px'} fontWeight={700} ml={'88px'} display={'flex'} >594<Span color={'#EBEBF54D'} fontSize={'14px'} mt={'10px'} ml={'10px'}>Total</Span></Text>
            <Image src="./src/assets/images/xett1.png" alt='' w={'486x'} h={'15px'} ml={'88px'} mt={'22px'}/>
            <Box display={'flex'} flexDirection={'row'}>
            <Box mt={'30px'} ml={'106px'}>
            <Text color={'#EBEBF54D'} display={'flex'} fontSize={'14px'} ><Image src="./src/assets/images/goy.png" alt='' w={'30px'} h={'22px'} mt={'1px'} mr={'10px'}></Image>Online</Text>
            <Text color={'White'} ml={'35px'}>179 users</Text>
            </Box>
            <Box mt={'30px'}>
            <Text color={'#EBEBF54D'} display={'flex'} fontSize={'14px'} ><Image src="./src/assets/images/acig.png" alt='' w={'30px'} h={'22px'} mt={'1px'} mr={'10px'}></Image>Offline</Text>
            <Text color={'White'} ml={'35px'}>394 users</Text>
            </Box>
            
            </Box>
            
            </Box>
        </Box>
        </Box>
        <Box>
            <Text fontSize={'18px'} fontWeight={700} mt={'34px'} ml={'34px'} display={'flex'} >Superiority<Image src="./src/assets/images/!.png" alt='' w={'18px'} h={'18px'} mt={'5px'}/></Text>
            <Image src="./src/assets/images/site.png" alt='' w={'250px'} h={'156px'} ml={'34px'} mt={'22px'}/>
            <Text color={'#5E5CE6'} display={'flex'} fontSize={'14px'} ><Image src="./src/assets/images/zincir.png" alt='' w={'14px'} h={'14px'} ></Image>Social Trading Platform</Text>
            <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} flexDirection={'column'} bg={"#1C1C1E"} w={'275px'} h={'250px'} ml={'34px'} mt={'44px'} rounded={'10px'} >
             <Box display={'flex'}>
              <Image src='./src/assets/images/google.png' w={'60px'} h={'60px'} pt={'10px'} pl={'10px'}/>
          <Box>    
            <Text fontSize={'14px'} fontWeight={700} mt={'10px'} ml={'10px'} color={'#EBEBF599'}>Stock trading</Text>
            <Text fontSize={'14px'} fontWeight={700} ml={'10px'} >Google</Text>
            <hr/>
        </Box>
        </Box>
        
        <Box display={'flex'}>
              <Image src='./src/assets/images/qirmizi.png' w={'60px'} h={'60px'} pt={'10px'} pl={'10px'}/>
          <Box>    
            <Text fontSize={'14px'} fontWeight={700} mt={'10px'} ml={'10px'} color={'#EBEBF599'}>Stock trading</Text>
            <Text fontSize={'14px'} fontWeight={700} ml={'10px'} >Foursquare</Text>
            <hr/>
        </Box>
        </Box>
      
             <Box display={'flex'}>
              <Image src='./src/assets/images/yasil.png' w={'60px'} h={'60px'} pt={'10px'} pl={'10px'}/>
          <Box>    
            <Text fontSize={'14px'} fontWeight={700} mt={'10px'} ml={'10px'} color={'#EBEBF599'}>Stock trading</Text>
            <Text fontSize={'14px'} fontWeight={700} ml={'10px'} >Kickstarter</Text>
            <hr/>
        </Box >
        </Box>
        <Box display={'flex'}>
              <Image src='./src/assets/images/sari.png' w={'60px'} h={'60px'} pt={'10px'} pl={'10px'}/>
          <Box>    
            <Text fontSize={'14px'} fontWeight={700} mt={'10px'} ml={'10px'} color={'#EBEBF599'}>Stock trading</Text>
            <Text fontSize={'14px'} fontWeight={700} ml={'10px'} >Google</Text>
            <hr/>
        </Box>
        </Box>
           </Box>
        </Box>
        <Box>
        <Text fontSize={'18px'} fontWeight={700} mt={'34px'} ml={'34px'} display={'flex'} >My Income<Image src="./src/assets/images/!.png" alt='' w={'18px'} h={'18px'} mt={'5px'}/></Text>
        <Image src="./src/assets/images/qara.png" alt='' w={'280px'} h={'80px'} ml={'34px'} mt={'22px'}/>
        </Box>
        </Box>

    </div>
    </div>
   </div>
   
    )
}

export default Dashboard