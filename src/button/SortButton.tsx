import React from "react";
import {Icon} from "../icon/Icon";
import {Button} from "rivet-react";

export const SortButton: React.FC<SortButtonProps> = (
    {
        title, sortAsc,
        active, onClick, children
    }) => {

    const SortIcon: React.FC = () => {
        return sortAsc ? <Icon name="sort-desc"/> : <Icon name="sort-asc"/>

    }

    return (
        <Button variant="plain" title={title} onClick={onClick}
        >
            {children}
            {active ? <SortIcon/> : ""}
        </Button>
    );
};

export interface SortButtonProps {

    /**
     *  button title, corresponds to title on hover
     */
    title?: string;
    /**
     * if true, the button edges are rounded
     */
    active?: boolean;
    sortAsc?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
