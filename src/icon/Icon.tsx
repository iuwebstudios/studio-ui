import React from "react";
import {drawings, IconName} from "./Drawings";
import "./assets/Icon.scss";

export const Icon: React.FC<IconProps> =
    ({name, onClick, iconString}) => {

        return (
            <div className="studio-icon">
                <svg
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={onClick}
                >
                    {
                        name ? drawings[name] : iconString ? Object(drawings)[iconString] : ""
                    }
                </svg>
            </div>
        );
    };


export interface IconProps {


    /**
     * icon click handler
     */
    onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

    name?: IconName;
    iconString?: string;
}
