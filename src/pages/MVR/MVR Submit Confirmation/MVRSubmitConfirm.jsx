/* eslint-disable default-case */
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { storage, db } from '../../../components/Firebase';
import firebase from 'firebase/app';
import './MVRSubmitConfirm.styles.scss';

class MVRSubmitConfirm extends Component {
  state = {
    confirmed: false,
    selectedFile: null,
    url: '',
  };

  handleConfirm = () => {
    this.setState({
      confirmed: !this.state.confirmed,
    });
    //DEBUG PURPOSES
    // console.log(this.state.confirmed);
  };
  driverURL = '';
  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.confirmed) {
      try {
        const { selectedFile, name } = this.props.location.state;
        const storageRef = storage.ref();
        const driverLicImgRef = storageRef.child(
          `driverslicenseimages/${name}`
        );

        const uploadLicense = driverLicImgRef.put(selectedFile);
        uploadLicense.on(
          firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          async (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // DEBUG PURPOSES
            // var progress =
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            //   case firebase.storage.TaskState.PAUSED: // or 'paused'
            //     console.log('Upload is paused');
            //     break;
            //   case firebase.storage.TaskState.RUNNING: // or 'running'
            //     console.log('Upload is running');
            //     break;
            // }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

              case 'storage/canceled':
                // User canceled the upload
                break;

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },
          async () => {
            // Upload completed successfully, now we can get the download URL
            await uploadLicense.snapshot.ref
              .getDownloadURL()
              .then((downloadURL) => {
                // DEBUG PURPOSES
                // console.log('File available at', downloadURL);
                this.url = downloadURL;
              });
          }
        );
      } catch (error) {
        console.error(error);
      }

      try {
        const { name, company, social4 } = this.props.location.state;
        const storageRef = storage.ref();
        const driverLicImgRef = storageRef.child(
          `driverslicenseimages/${name}`
        );
        const driverImg = await driverLicImgRef.getDownloadURL();
        await db.ref(`driver/${name}`).set(
          {
            company,
            name,
            social4,
            driverImg,
          },
          (error) => {
            if (error) {
              window.alert(
                'There has been an error please try again or contact us'
              );
            } else {
              window.alert('Your information has been successfully submitted.');
            }
          }
        );
      } catch (error) {}
    } else {
      window.alert(
        'Please check the "I Affirm" Box to continue with submission'
      );
    }
  };

  render() {
    const { company } = this.props.location.state;
    return (
      <div>
        <div className="title-confirm-text">
          Please Read Below Before Submitting
        </div>
        <div className="confirm-text">
          As a driver of a {company}, I understand that it is my responsibility
          to operate the vehicle in a safe manner and to drive defensively to
          prevent injuries and property damage. I also understand that {company}{' '}
          will periodically review my Motor Vehicle Record to determine
          continued eligibility to drive a company vehicle or a personal vehicle
          on company business. In accordance with the Fair Credit Reporting Act
          and the Federal Drivers Privacy Protection Act, as well as any State
          specific regulations that may be applicable, I have been informed that
          a Motor Vehicle Record will be (annually) obtained on me for initial
          and continued employment purposes. I agree that {company} has the
          right, at any time, to perform inspections of both the inside and
          outside of the vehicle provided to me by {company}. I acknowledge the
          receipt of the above disclosure and authorize {company} or its
          designated agent to obtain a Motor Vehicle Record report. The
          authorization is valid as long as I am an Employee or Employee
          candidate and may only be rescinded in writing, in accordance to
          referenced public laws.
        </div>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            onClick={this.handleConfirm}
            type="checkbox"
            label="I affirm all the data I am submitting is true and accurate"
          />
        </Form.Group>
        <Form.Group>
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" className="my-1">
              Submit
            </Button>
          </form>
        </Form.Group>
      </div>
    );
  }
}

export default MVRSubmitConfirm;
