import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={props.hasItems ? <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} /> : null}
    {...props}
  />
))(({ theme, hasItems }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  paddingLeft: hasItems ? 0 : theme.spacing(1.8),
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const AccordionItem = ({ title, items, isExpanded, handleChange, panelId, imgSrc }) => {
  const [activeLink, setActiveLink] = useState('/dashboard');  
  const hasItems = items && items.length > 0;

  // Handle link click and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(link)
    if(link !== "/dashboard"){
        document.querySelector(".defBtn").classList.remove("activeMenu");
    }else{
        document.querySelector(".defBtn").classList.add("activeMenu");
    }
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleChange(panelId, hasItems)}>
      {hasItems ? (
        <AccordionSummary
          aria-controls={`${panelId}d-content`}
          id={`${panelId}d-header`}
          hasItems={hasItems}
            
        >
          <Typography>
            <img src={imgSrc} alt="icon" style={{ marginRight: '10px' }} />
            {title.name}
          </Typography>
        </AccordionSummary>
      ) : (
        <Link
          to={title.link}
          style={{ textDecoration: 'none', color: 'inherit' }}
          className={`${activeLink === title.link ? 'activeMenu' : ''} defBtn l-nav-menu-item`} 
          onClick={() => handleLinkClick(title.link)}  
        >
          <AccordionSummary
            aria-controls={`${panelId}d-content`}
            id={`${panelId}d-header`}
            hasItems={hasItems}
          >
            <Typography>
              <img src={imgSrc} alt="icon" style={{ marginRight: '10px' }} />
              {title.name}
            </Typography>
          </AccordionSummary>
        </Link>
      )}
      {hasItems && (
        <AccordionDetails>
          <Typography>
            <ul>
              {items.map(({ name, link }, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={link}
                    className={activeLink === link ? 'activeMenu' : ''}  
                    onClick={() => handleLinkClick(link)}  
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default AccordionItem;
