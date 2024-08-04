import Inspector from "./inspector";
const { Placeholder, ButtonGroup, Button } = wp.components;
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
export const layoutOptions = {
    '1': [["100"]],
    '2': [["50", "50"], ["25", "75"], ["75", "25"]],
    '3': [["33", "33", "33"], ["25", "50", "25"]],
    '4': [["25", "25", "25", "25"]]
}

export const visualizeLayout = (layout) => {
    return layout.map(size => (
        <div style={{
            display: 'inline-block',
            height: '36px',
            width: `${size}%`,
            backgroundColor: '#555',
            margin: '1px',
            borderRadius: '3px'
        }}></div>
    ));
};

const createInnerBlocksTemplate = (cols) => cols.map((width, index) => [ 'core/column',{}, []])

export default function Edit(props) {
    const { attributes, setAttributes } = props
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <Inspector {...props}/>
            <Placeholder
                className="sc-columns-placeholder"
                key="placeholder"
                icon="editor-table"
                label="Simple Columns"
                instructions={!attributes?.layout ? "Select the number of cols" : ""}
            >
                {!attributes?.layout ? (
                    <div>
                        <ButtonGroup>
                            {[1, 2, 3, 4].map(number => (
                                <Button
                                    key={number}
                                    style={{background: attributes?.cols === number ? 'lightblue' : undefined}}
                                    onClick={() => setAttributes({cols: number})}
                                >
                                    {number}
                                </Button>
                            ))}
                        </ButtonGroup>
                        {attributes?.cols && (
                            <div>
                                <p>Select the layout:</p>
                                {layoutOptions[attributes.cols].map((optionLayout, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => setAttributes({layout: optionLayout})}
                                        style={{width: '100px'}}
                                    >
                                        {visualizeLayout(optionLayout)}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div
                        className={`sc-inner-columns sc-inner-columns-${attributes.cols} sc-inner-layout-${attributes.layout.join('-')}`}>
                        <InnerBlocks
                            template={createInnerBlocksTemplate(attributes.layout)}
                            orientation="horizontal"
                        />
                    </div>
                )}
            </Placeholder>
        </div>
    );
}

