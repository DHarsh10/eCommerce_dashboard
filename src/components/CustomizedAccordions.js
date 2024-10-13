import React, { useState } from 'react';
import AccordionItem from './AccordionItem'; // Import the child component
import useTheme from '../contexts/themeContext';

export default function CustomizedAccordions({ accordions, header }) {
  // Track multiple expanded accordions
  const [expandedPanels, setExpandedPanels] = useState([]);
  const { theme } = useTheme();

  // Handle expand/collapse logic for multiple panels
  const handleChange = (panel, hasItems) => () => {
    if (hasItems) {
      setExpandedPanels((prevExpanded) =>
        prevExpanded.includes(panel)
          ? prevExpanded.filter((p) => p !== panel) // Remove from expanded if it's already open
          : [...prevExpanded, panel] // Add to expanded if it's not open
      );
    }
  };

  return (
    <div className='pb-6'>
      <h4 className='menu-acc-header'>{header}</h4>
      {accordions.map(({ title, items }, index) => {
        const panelId = `panel${index + 1}`;
        const imgSrc = theme === 'light' ? title.img[0] : title.img[1];
        const isExpanded = expandedPanels.includes(panelId); // Check if this panel is expanded

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
