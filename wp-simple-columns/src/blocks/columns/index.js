import Edit from './components/edit';
import Save from "./components/save";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register simple columns block.
 */

export const breakpoints = [
    { label: '468px', value: 'xs' },
    { label: '576px', value: 'sm' },
    { label: '768px', value: 'md' },
    { label: '992px', value: 'lg' },
    { label: '1200px', value: 'xl' },
    { label: '1400px', value: 'xxl' },
    { label: '1600px', value: 'xxxl' },
];

registerBlockType('simple-columns/columns', {
    title: 'Simple Columns',
    icon: 'columns',
    category: 'common',
    attributes: {
        mobileBreakpoint: {
            type: 'string',
            default: 'md',
        },
        tabletBreakpoint: {
            type: 'string',
            default: null,
        },
        cols: {
            type: 'number',
            default: null,
        },
        layout: {
            type: 'array',
            default: null,
        },
    },
    edit: (props) => <Edit {...props} />,
    save: (props) => <Save {...props} />,
});