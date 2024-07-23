import type { ReactElement } from 'react';

export interface DetailCardContainerProps {
  /**
   * title will show on the header of the card
   */
  title: string;
  /**
   * children wil render on the body of the card
   */
  children: ReactElement;
  /**
   * key should be a unique string to help react dom index elements
   */
  key?: string;
  /**
   * if you pass this parameter, header title color will change
   */
  titleColor?: string;
  /**
   * if you pass this parameter, pen icon will appear
   */
  onEditClick?: (id?: number) => void;
  /**
   * if you pass this parameter, trash icon will appear
   */
  onDeleteClick?: (id?: number) => void;
  /**
   * it will pass to onEditClick
   */
  id?: number;
}
