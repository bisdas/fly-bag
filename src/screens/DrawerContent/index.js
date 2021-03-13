import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import DrawerSection from '../../components/shared/DrawerSection'
import DrawerItem from '../../components/shared/DrawerItem';
import IconProfile from '../../assets/icons/IconProfile.svg';
import IconOrders from '../../assets/icons/IconOrders.svg';
import IconBasket from '../../assets/icons/IconBasket.svg';
import IconSavedItems from '../../assets/icons/IconSavedItems.svg';
import IconAddress from '../../assets/icons/IconAddress.svg';
import IconWallet from '../../assets/icons/IconWallet.svg';
import IconFAQ from '../../assets/icons/IconFAQ.svg';
import IconAboutUs from '../../assets/icons/IconAboutUs.svg';
import IconTAndC from '../../assets/icons/IconTAndC.svg';
import IconSupport from '../../assets/icons/IconSupport.svg';
import IconSignOut from '../../assets/icons/IconSignOut.svg';

import Settings from '../../constants/settings'

export default (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <DrawerSection>
                <DrawerItem
                    icon={<IconProfile height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="Sign In"
                    onPress={() => { props.navigation.navigate('SignIn'); }}
                />
            </DrawerSection>
            <DrawerSection>
                {/* <DrawerItem
                    icon={<IconOrders height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="My Orders"
                    onPress={() => { }}
                /> */}
                <DrawerItem
                    icon={<IconBasket height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="My Basket"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={<IconSavedItems height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="My Saved Items"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={<IconAddress height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="My Addresses"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={<IconWallet height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="My Wallet"
                    rightPanelText="$ 100"
                    rightPanelTextStyle = {{color: '#1b8800', fontWeight: 'bold'}}
                    onPress={() => { }}
                />
            </DrawerSection>
            <DrawerSection>
                <DrawerItem
                    icon={<IconFAQ height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="FAQ"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={<IconAboutUs height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="About Us"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={<IconTAndC height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="Terms & Conditions"
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={<IconSupport height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="Support"
                    onPress={() => { }}
                />
            </DrawerSection>
            <DrawerSection showBorder={false}>
            <DrawerItem 
                    icon={<IconSignOut height={Settings.DrawerIconDefaultHeight} width={Settings.DrawerIconDefaultWidth} />}
                    itemText="Sign Out"
                    onPress={() => { }}
                />
            </DrawerSection>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    }
})