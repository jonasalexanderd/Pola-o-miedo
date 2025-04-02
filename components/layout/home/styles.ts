import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginHorizontal: 20,
  },
  searchPlaceholder: {
    marginLeft: 12,
    color: '#8E8E93',
    fontSize: 16,
  },
  featuredContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 180,
    marginBottom: 24,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  featuredSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 4,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    marginRight: 12,
  },
  categoryButtonActive: {
    backgroundColor: '#2563EB',
  },
  categoryText: {
    fontSize: 16,
    color: '#8E8E93',
  },
  categoryTextActive: {
    color: '#fff',
  },
  itemsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  itemCard: {
    backgroundColor: '#e2e2e2',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    resizeMode: 'contain',
    height: 200,
  },
  stockBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  stockText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  itemContent: {
    padding: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  brandName: {
    fontSize: 14,
    color: '#6B7280',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563EB',
  },
  addButton: {
    backgroundColor: '#2563EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  emptyContainer: {
    alignItems: 'center',
  },
  emptyImageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 16,
  },
});

export default homeStyles;
