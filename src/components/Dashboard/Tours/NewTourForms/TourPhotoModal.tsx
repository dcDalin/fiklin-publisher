/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import { Modal, Image, Header, Button, Icon, Segment } from 'semantic-ui-react';
import ReactCrop from 'react-image-crop';
import { useDropzone } from 'react-dropzone';
import 'react-image-crop/dist/ReactCrop.css';
import styles from '../../Profile/Profile.module.scss';

interface Props {
  tourNewInput: any;
  setTourNewInput: any;
}

const UpdateProfilePicModal: React.FC<Props> = ({ tourNewInput, setTourNewInput }: Props) => {
  const { tourPhotoURL } = tourNewInput;
  console.log('Initial tour photo is: ', tourNewInput);
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

  async function submitPhoto(): Promise<void> {
    getCroppedImg(image, crop, 'preview.jpg').then((res: any) => {
      closeModal();

      const fileReaderInstance = new FileReader();
      fileReaderInstance.readAsDataURL(res);
      fileReaderInstance.onload = (): any => {
        const base64data = fileReaderInstance.result;
        setTourNewInput({ ...tourNewInput, tourPhotoURL: base64data });
      };

      // setTourNewInput({ ...tourNewInput, tourPhotoURL: image.src });
      // console.log('Res is: ', res);
      // console.log('Image is: ', image.src);
      // console.log('Crop is: ', crop);
    });
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Segment className={styles.pPicWrapper}>
        <Image
          src={tourPhotoURL}
          size="small"
          label={{ as: 'a', corner: 'right', icon: 'edit' }}
          className={styles.pPic}
          onClick={openModal}
        />
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
          <Image src={tourPhotoURL} avatar size="small" />
          <span>Edit Tour Picture</span>
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
