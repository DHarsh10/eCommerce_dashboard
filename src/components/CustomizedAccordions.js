import React, { useState } from 'react';
import AccordionItem from './AccordionItem'; 
import useTheme from '../contexts/themeContext';

export default function CustomizedAccordions({ accordions, header }) {
  const [expandedPanels, setExpandedPanels] = useState([]);
  const { theme } = useTheme();


  const handleChange = (panel, hasItems) => () => {
    if (hasItems) {
      setExpandedPanels((prevExpanded) =>
        prevExpanded.includes(panel)
          ? prevExpanded.filter((p) => p !== panel) 
          : [...prevExpanded, panel] 
      );
    }
  };

  return (
    <div className='pb-6'>
      <h4 className='menu-acc-header'>{header}</h4>
      {accordions.map(({ title, items }, index) => {
        const panelId = `panel${index + 1}`;
        const imgSrc = theme === 'light' ? title.img[0] : title.img[1];
        const isExpanded = expandedPanels.includes(panelId); 

        return (
          <AccordionItem
            key={index}
            title={title}
            items={items}
            isExpanded={isExpanded}
            handleChange={handleChange}
            panelId={panelId}
            imgSrc={imgSrc}
          />
        );
      })}
    </div>
  );
}
