import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// добавить в проект иконки и импортировать
const downIcon = ArrowDownwardIcon
const upIcon = ArrowUpwardIcon
const noneIcon = null

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return "";
    } else {
        return down;
    }
};

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
    {icon === downIcon ? (
        <ArrowDownwardIcon id={id + "-icon-" + sort} />
    ) : icon === upIcon ? (
        <ArrowUpwardIcon id={id + "-icon-" + sort} />
    ) : null}
  </span>
    );
}

export default SuperSort