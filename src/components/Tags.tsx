import * as React from 'react';

import Card from './Card';
import Container from './Container';
import { Tag as TagType } from 'src/types';
import Tag from './Tag';

type Props = {
  tags: TagType[];
};

export default ({ tags }: Props) => {
  return (
    <Card title="Tags">
      <Container className="tags-content">
        {tags.map(({ name, color, id }) => (
          <Tag key={id} name={name} color={color} />
        ))}
      </Container>
      <style global jsx>{`
        .tags-content {
          padding: 1rem;
        }
      `}</style>
    </Card>
  );
};
