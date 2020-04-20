import React from 'react';
import styled from 'styled-components';

export default function WWCHeatTable (props) {
    return (
        <Table>
            <thead>
                <THeaderRow>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Searches</th>
                </THeaderRow>
            </thead>
            <tbody>
                {props.data.map(item => {
                    return (
                        <TDataRow key={item.id}>
                            <TData>{item.id}</TData>
                            <TData>{item.name}</TData>
                            <TData>{item.country}</TData>
                            <TData>{item.searches}</TData>
                        </TDataRow>
                    )
                })}
            </tbody>
        </Table>
    )
}

const Table = styled.table`
    width: 100%;
`;

const THeaderRow = styled.tr`
    background: #666;
    color: #eee;
`;

const TDataRow = styled.tr`
    background: #eee;
    color: #666;
`;

const TData = styled.td`
    text-align: center;
`;