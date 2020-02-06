import React from 'react';
import { Icon, Header, SemanticICONS } from 'semantic-ui-react';
import styles from './DashHeader.module.scss';

interface Props {
  icon?: SemanticICONS;
  title: string;
}
const DashHeader: React.FC<Props> = (props: Props) => {
  const { icon, title } = props;
  return (
    <Header as="h2" className={styles.header}>
      <Icon name={icon} />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
};

export default DashHeader;
