import * as React from "react";
import { List} from "react-native-paper";
import {useMemo} from "react";
import {IconName} from "components";
import {ScreenProps} from "../navigation";

export function HomeScreen({ navigation }: ScreenProps) {

    const menuItems = useMemo<{ action: () => void; title: string; icon: IconName; disabled?: boolean }[]>(() => ([
            {
                action: () => navigation.navigate('Transactions'),
                title: 'Transactions',
                icon: 'credit-card-outline',
            },
            {
                title: 'Categories',
                action: () => {},
                icon: 'format-list-bulleted',
                disabled: true
            },
            {
                title: 'Settings',
                action: () => {},
                icon: 'cog',
                disabled: true
            }
        ]
    ), []);

    return (
        <>
            <List.Section>
                {menuItems.map(({title, action, icon, disabled}, index) => (
                    <List.Item title={title} onPress={action} left={() => <List.Icon icon={icon}/>} right={() => <List.Icon icon={'chevron-right'}/>} disabled={disabled} key={index}/>
                ))}
            </List.Section>
        </>
    );
}

