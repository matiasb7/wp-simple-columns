/**
 * External dependencies.
 */
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function Save({attributes}) {
    const {cols, layout, tabletBreakpoint, mobileBreakpoint, autoAdjust} = attributes;
    const blockProps = useBlockProps.save();

    if (!layout || !cols) return null;

    const classes = [
        'sc-inner-columns',
        `sc-inner-columns-${cols}`,
        `sc-inner-layout-${layout.join('-')}`,
        `sc-mobile-bk-${mobileBreakpoint}`,
        `sc-mobile-bk-${mobileBreakpoint}`,
        autoAdjust ? 'sc-auto-adjust' : '',
        tabletBreakpoint ? `sc-tablet-bk-${tabletBreakpoint}` : '',
    ]

    return (
        <div {...blockProps} >
            <div
                className={classes.filter(Boolean).join(' ')}>
                <InnerBlocks.Content/>
            </div>
        </div>
    )
}