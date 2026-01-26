'use client';

import { Card } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

const RideCard = ({ title, imgSrc, description, link }) => {
  return (
    <Link href={link}>
      <Card
        hoverable
        cover={
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={imgSrc}
              alt={title}
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        }
        className="bg-gray-900 border border-white/10 rounded-2xl text-white shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        bodyStyle={{ backgroundColor: 'transparent' }}
      >
        <Meta
          title={<span className="text-white font-bold">{title}</span>}
          description={
            <p className="text-gray-300 text-sm line-clamp-3">
              {description}
            </p>
          }
        />
      </Card>
    </Link>
  );
};

export default RideCard;
