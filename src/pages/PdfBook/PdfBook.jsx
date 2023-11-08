import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 0
  }
});

// Create Document Component
const PdfBook = ({book}) => {
  console.log(book)

  const {name, description} = book;
  
    return (
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{name}</Text>+
          </View>
          <View style={styles.section}>
            <Text>{description}</Text>
          </View>
        </Page>
      </Document>
    );
};

export default PdfBook;