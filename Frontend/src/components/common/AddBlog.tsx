// import React from "react";

// export const AddBlog = ({ type, title, description, imageUrl }) => {
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={3}
//           borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
//           borderRadius={10}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin={"auto"}
//           marginTop={3}
//           display="flex"
//           flexDirection={"column"}
//           width={"80%"}
//         >
//           <Typography
//             className={classes.font}
//             fontWeight={"bold"}
//             padding={3}
//             color="grey"
//             variant="h2"
//             textAlign={"center"}
//           >
//             Post Your Blog
//           </Typography>
//           <InputLabel className={classes.font} sx={labelStyles}>
//             Title
//           </InputLabel>
//           <TextField
//             className={classes.font}
//             name="title"
//             onChange={handleChange}
//             value={inputs.title}
//             margin="auto"
//             variant="outlined"
//           />
//           <InputLabel className={classes.font} sx={labelStyles}>
//             Description
//           </InputLabel>
//           <div
//             style={{
//               minHeight: "6em",
//               cursor: "text",
//               padding: "5px",
//               border: "1px solid #c7c7c7",
//             }}
//             onClick={focusEditor}
//           >
//             <Editor
//               editorState={editorState}
//               onEditorStateChange={(value) => {
//                 setEditorState(value);
//               }}
//               toolbar={{
//                 options: [
//                   "inline",
//                   "blockType",
//                   "fontSize",
//                   "list",
//                   "textAlign",
//                   "link",
//                 ],
//                 inline: { inDropdown: false },
//                 list: { inDropdown: true },
//                 textAlign: { inDropdown: true },
//                 link: { inDropdown: false },
//               }}
//             />
//           </div>
//           <InputLabel className={classes.font} sx={labelStyles}>
//             ImageURL
//           </InputLabel>
//           <TextField
//             className={classes.font}
//             name="imageURL"
//             onChange={handleChange}
//             value={inputs.imageURL}
//             margin="auto"
//             variant="outlined"
//           />
//           <Button
//             sx={{ mt: 2, borderRadius: 4 }}
//             variant="contained"
//             color="warning"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };
