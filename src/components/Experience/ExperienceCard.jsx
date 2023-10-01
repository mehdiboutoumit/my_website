import React from 'react';
import { Card, CardContent, Typography, CardHeader, Avatar } from '@mui/material';

const ExperienceCard = (props) => {
  const { companyLogo, position, date, description } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={companyLogo} alt="Company Logo" />
        }
        title={position}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
