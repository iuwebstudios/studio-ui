import React from 'react';
import {Icon, IconProps} from "./Icon";
import {Meta, Story} from '@storybook/react';
import {drawings} from "./Drawings";
import {Button} from "rivet-react";
import "./assets/IconStories.scss";

export default {
    title: 'Visual/Icons',
    component: Icon,
} as Meta;


const Template: Story<IconProps> = (args) => <div className="icon-search-story"><Icon {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    name: 'alert',
};

const SearchTemplate: Story<IconProps> = () => {

    return (
        <div className="icon-search-story">
            {
                Object.keys(drawings).map(key =>
                    <Button key={key} size="small" title={key} variant={"plain"}>
                        <Icon iconString={key}/>
                    </Button>
                )
            }

        </div>
    );
};
export const AllIcons = SearchTemplate.bind({});

