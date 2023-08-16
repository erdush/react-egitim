public class Program
{


    public static void Main(string[] args)
    {
        int[] arr = { 1, 3, 4, 5, 7, 8, 9 };
        Aktar(arr);
    }

    public static void Aktar(IList<int> liste)
    {
        liste.Add(10);
    }

}