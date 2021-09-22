import React, {ReactElement, ReactNode, useState} from "react";
import "./assets/SortableTable.scss";
import {Button, Pagination, Section, Table} from "rivet-react";
import {SortButton} from "../button/SortButton";


export const SortableTable: React.FC<TableProps> = (
    {
        title,
        defaultPageSize,
        sortBy, children
    }) => {
    const {header, rows} = children;
    const [sort, setSort] = useState<Sort>(sortBy ? sortBy : {index: 0});
    const [page, setPage] = useState<Page>({num: 0, size: defaultPageSize ? defaultPageSize : 20});
    const totalPage = Math.ceil(rows.length / page.size);
    const handleSortClicked = (index: number) => {
        if (sort.index === index)
            setSort({...sort, desc: !sort.desc});
        else
            setSort({index});
    };
    const sortRows = (): Col[][] => {
        if (header[sort.index].sort) {
            const currentRows = rows.sort(header[sort.index].sort);
            return sort.desc ? currentRows.reverse() : currentRows;
        }

        return rows.sort((a: Col[], b: Col[]): number => {
                if (a[sort.index]?.value === null || b[sort.index]?.value === null)
                    return 0;
                const first = a[sort.index]?.value?.toString().toLowerCase();
                const second = b[sort.index]?.value?.toString().toLowerCase();
                let result = first.localeCompare(second);
                return sort.desc ? -result : result;
            }
        );
    }
    const pageEndIndex = (): number => (page.num + 1) * page.size;
    return (
        <Section className="studio-sortable-table">
            <h2><strong>{title}</strong></h2>
            <Table>
                <caption className="sr-only">{title}</caption>
                <thead>
                <tr>
                    {header.map((head, index) =>
                        <th scope="col" key={"row-head-" + head.name}
                            className={head.visibility ? "main" : ""}
                        >
                            {typeof head.name === 'string' ?
                                <div className="sort-button">
                                    <SortButton
                                        onClick={() => {
                                            handleSortClicked(index)
                                        }}
                                        active={sort.index === index}
                                        sortAsc={!sort.desc}>
                                        {head.name}
                                    </SortButton>
                                </div> : head.name
                            }
                        </th>
                    )}
                </tr>
                </thead>
                <tbody>
                {
                    sortRows().slice(page.num * page.size, pageEndIndex() - 1).map((cols, rowIndex) =>
                        <tr key={"row-" + rowIndex}>{
                            cols.map((col, colIndex) =>
                                <td key={"row-col" + rowIndex + colIndex}
                                    className={header[colIndex].visibility ? "main" : ""}>
                                    
                                    {col.content}
                                </td>)}
                        </tr>
                    )
                }
                </tbody>

            </Table>
            {totalPage > 1 ?
                <Pagination>
                    <Button
                        variant="plain"
                        aria-label="Previous set of pages"
                        disabled={page.num === 0}
                        onClick={() => {
                            if (page.num > 0)
                                setPage({...page, num: page.num - 1});
                        }}>
                        Previous
                    </Button>
                    <Button
                        aria-label="Next set of pages"
                        disabled={page.num === totalPage - 1}
                        variant="plain"
                        onClick={() => {
                            if (page.num < totalPage - 1)
                                setPage({...page, num: page.num + 1});
                        }}>
                        Next
                    </Button>
                    <div>
                        ( {page.num * page.size + 1} - {pageEndIndex() < rows.length ? pageEndIndex() : rows.length} of {rows.length})
                    </div>
                </Pagination>
                : ""}
        </Section>
    );
};

export interface TableProps {
    title: string;
    children: {
        header: Head[],
        rows: Col[][]
    };
    sortBy?: Sort;
    defaultPageSize?: number;
}

export interface Page {
    num: number;
    size: number;
}

export interface Sort {
    index: number;
    desc?: boolean;
}

export interface Head {
    name: ReactElement | string;
    title?: string;
    sort?: (a: Col[], b: Col[]) => number;
    visibility?: "large-screen";
}

export interface Col {
    value: string;
    content: ReactNode;
}