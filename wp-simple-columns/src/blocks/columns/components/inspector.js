import {TextControl, PanelBody, RangeControl, SelectControl, ToggleControl} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import {layoutOptions, visualizeLayout} from "./edit";
import { breakpoints } from "../index";

export default function Inspector({ attributes, setAttributes }) {
    const { mobileBreakpoint, tabletBreakpoint, cols, layout, autoAdjust } = attributes;

    // const handleColumnChange = (newCols) => {
    //     const layout = layoutOptions[newCols][0];
    //     setAttributes({ cols: newCols, layout })
    // }

    return (
        <InspectorControls>
            <PanelBody title="Responsive Settings">
                <SelectControl
                    label="Select Breakpoint"
                    value={mobileBreakpoint}
                    options={breakpoints}
                    disabled={autoAdjust}
                    onChange={(newBreakpoint) => {
                        setAttributes({mobileBreakpoint: newBreakpoint})
                    }}
                />
                {/*{cols > 2 && (*/}
                {/*    <SelectControl*/}
                {/*        label="Select Breakpoint"*/}
                {/*        disabled={autoAdjust}*/}
                {/*        value={tabletBreakpoint}*/}
                {/*        options={breakpoints}*/}
                {/*        onChange={(newBreakpoint) => setAttributes({ tabletBreakpoint: newBreakpoint })}*/}
                {/*    />*/}
                {/*)}*/}
                <ToggleControl
                    help='To override the default min-width of column, override the css variable --sc-auto-adjust'
                    label="Auto Adjust Columns"
                    checked={autoAdjust}
                    onChange={() => setAttributes({ autoAdjust: !autoAdjust })}
                />
            </PanelBody>
            {/*<PanelBody title="Layout Settings">*/}
            {/*    <RangeControl*/}
            {/*        label="Number of Columns"*/}
            {/*        value={cols}*/}
            {/*        onChange={handleColumnChange}*/}
            {/*        min={1}*/}
            {/*        max={4}*/}
            {/*    />*/}
            {/*    {attributes?.cols && (*/}
            {/*        <div>*/}
            {/*            <p>Select the layout:</p>*/}
            {/*            {layoutOptions[attributes.cols].map((optionLayout, index) => (*/}
            {/*                <Button*/}
            {/*                    key={index}*/}
            {/*                    onClick={() => setAttributes({layout: optionLayout})}*/}
            {/*                    style={{width: '100px'}}*/}
            {/*                >*/}
            {/*                    {visualizeLayout(optionLayout)}*/}
            {/*                </Button>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</PanelBody>*/}
        </InspectorControls>
    );
}
