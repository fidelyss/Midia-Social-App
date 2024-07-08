import React, { useState } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts.js";
import FileBase from "react-file-base64";
export default function Form() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    };
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={HandleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="standard"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="standard"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="standard"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="standard"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />

                </div>
                <Button variant="contained" className={classes.buttonSubmit} color='primary' fullWidth size="large" type="submit">Submit</Button>
                <Button variant="contained" className={classes.buttonSubmit} color='secundary' fullWidth size="large" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}