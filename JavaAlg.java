import java.util.Arrays;

class JavaAlg {

  public static void main(String[] args) {
    int x = searchInsert(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 }, 12);
  }

  public static int searchInsert(int[] nums, int target) {
    int low = 0;
    int high = nums.length - 1;
    while (low <= high) {
      int mid = (low + high) / 2;
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low;
  }

  public static int search(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    int mid;

    while (start <= end) {
      mid = (start + end) / 2;
      if (nums[mid] == target) return mid; else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid + 1;
      }
    }
    return -1;
  }

  public boolean checkInclusion(String s1, String s2) {
    if (s1.length() > s2.length() || s2.length() == 0) return false;
    if (s1.length() == 0) return true;

    int x = s1.length();
    int y = s2.length();
    int[] array1 = new int[26];
    int[] array2 = new int[26];

    for (int i = 0; i < x; i++) {
      System.out.println(s1.charAt(i));
      System.out.println(s2.charAt(i));

      array1[s1.charAt(i) - 'a']++;
      array2[s2.charAt(i) - 'a']++;
    }
    

    for (int i = x; i < y; i++) {
      if (Arrays.equals(array1, array2)) return true;

      array2[s2.charAt(i - x) - 'a']--;
      array2[s2.charAt(i) - 'a']++;
    }
    if (Arrays.equals(array1, array2)) return true; else return false;
  }
  // public static int[] sortedSquares(int[] nums) {
  //   // int

  //   int[] reArr;
  //   int start = 0;
  //   int end = nums.length - 1;

  //   for (int i = 0; i < nums.length && start <= end; i++) {
  //     if(Math.abs(nums[start]) > Math.abs(nums[end])){
  //       reArr.
  //     }
  //   }
  //   return new int[] { 1, 2 };
  // }
}
