import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export const MemberCard = ({member}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="160"
            image={member.img}
            alt={member.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {member.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                背番号: {member.number}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ポジション: {member.position}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {member.introduction}
            </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
