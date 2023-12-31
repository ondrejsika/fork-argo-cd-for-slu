import * as React from 'react';
import {Sidebar} from '../../../sidebar/sidebar';
import {ViewPreferences} from '../../services';

require('./layout.scss');

export interface LayoutProps {
    navItems: Array<{path: string; iconClassName: string; title: string}>;
    onVersionClick?: () => void;
    children?: React.ReactNode;
    pref: ViewPreferences;
    isExtension?: boolean;
}

const getBGColor = (theme: string): string => (theme === 'light' ? '#dee6eb' : '#100f0f');

export const Layout = (props: LayoutProps) => (
    <div className={props.pref.theme ? 'theme-' + props.pref.theme : 'theme-light'}>
        <div className={`cd-layout ${props.isExtension ? 'cd-layout--extension' : ''}`}>
            <Sidebar onVersionClick={props.onVersionClick} navItems={props.navItems} pref={props.pref} />
            {props.pref.theme ? (document.body.style.background = getBGColor(props.pref.theme)) : null}
            <div className={`cd-layout__content ${props.pref.hideSidebar ? 'cd-layout__content--sb-collapsed' : 'cd-layout__content--sb-expanded'} custom-styles`}>
                {props.children}
            </div>
        </div>
    </div>
);
