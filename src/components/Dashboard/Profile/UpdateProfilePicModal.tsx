/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Modal, Image, Header, Button, Icon, Segment, Placeholder } from 'semantic-ui-react';
import ReactCrop from 'react-image-crop';
import { useDropzone } from 'react-dropzone';
import { UPDATE_PROFILE_PIC } from '../../../GraphQl/Mutations/Auth';
import { WHO_IS_ME } from '../../../GraphQl/Queries/Auth';
import 'react-image-crop/dist/ReactCrop.css';
import styles from './Profile.module.scss';

interface Props {
  url: string;
}

const UpdateProfilePicModal: React.FC<Props> = ({ url }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): any => {
    setIsModalOpen(true);
  };

  const closeModal = (): any => {
    setIsModalOpen(false);
  };

  const [src, setSrc] = useState();
  const [crop, setCrop] = useState({
    height: 400,
    aspect: 1 / 1,
  });
  const [image, setImage] = useState();

  const onImageLoaded = (image: any): any => {
    setImage(image);
  };

  const onCropComplete = (crop: any): any => {
    console.log('image is: ', crop);
    setCrop(crop);
  };

  const onCropChange = (crop: any): any => {
    console.log('Crop is: ', crop);
    setCrop(crop);
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => setSrc(reader.result), false);
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const getCroppedImg = (image: any, pixelCrop: any, fileName: any): any => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx: any = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x * scaleX,
      pixelCrop.y * scaleY,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob((file: any) => {
        file.name = fileName;
        resolve(file);
      }, 'image/jpeg');
    });
  };

  const [editProfilePic, { loading }] = useMutation(UPDATE_PROFILE_PIC);

  async function submitPhoto(): Promise<void> {
    getCroppedImg(image, crop, 'preview.jpg').then((res: any) => {
      closeModal();
      editProfilePic({
        variables: { file: res },
        refetchQueries: [{ query: WHO_IS_ME }],
      })
        .then(() => closeModal())
        .catch(() => closeModal());
    });
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Segment className={styles.pPicWrapper}>
        {loading ? (
          <Placeholder style={{ height: 150, width: 150 }}>
            <Placeholder.Image />
          </Placeholder>
        ) : (
          <Image
            src={url}
            size="small"
            label={{ as: 'a', corner: 'right', icon: 'edit' }}
            className={styles.pPic}
            onClick={openModal}
          />
        )}
      </Segment>
      <Modal
        size="mini"
        closeIcon
        open={isModalOpen}
        closeOnEscape={false}
        closeOnDimmerClick={false}
        onClose={closeModal}
      >
        <Header>
          <Image src={url} avatar size="small" />
          <span>Edit Profile Picture</span>
        </Header>
        <Modal.Content style={{ textAlign: 'center' }}>
          <div {...getRootProps()} style={{ padding: '1em' }}>
            <input {...getInputProps()} accept="image/png, image/jpeg" />
            <Button basic color="black">
              <Icon name="photo" />
              Upload New Profile Picture
            </Button>
          </div>
          {src && (
            <ReactCrop
              src={src}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onComplete={onCropComplete}
              onChange={onCropChange}
              className={styles.cropper}
            />
          )}
        </Modal.Content>
        {src && (
          <Modal.Actions>
            <Button basic color="black" onClick={submitPhoto}>
              Upload &nbsp; <Icon name="upload" />
            </Button>
          </Modal.Actions>
        )}
      </Modal>
    </>
  );
};

export default UpdateProfilePicModal;
