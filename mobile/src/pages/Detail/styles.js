import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        color: '#13131A',
        fontSize: 20,
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#13131A',
        marginTop: 8,
    },

    actions: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});