using System.ComponentModel;
namespace PatientManagement.PatientManagement.Entities
{
    public enum PaymentStatus
    {
        /// <summary>
        /// The item has been successfully processed.
        /// </summary>
        Success = 0,

        /// <summary>
        /// The item has been denied payment.
        /// </summary>
        Denied,

        /// <summary>
        /// The item is awaiting payment.
        /// </summary>
        Pending,

        /// <summary>
        /// The item is being processed.
        /// </summary>
        Processing,

        /// <summary>
        /// Processing failed for the item.
        /// </summary>
        Failed,

        /// <summary>
        /// The item is unclaimed. If the item is not claimed within 30 days, the funds will be returned to the sender.
        /// </summary>
        Unclaimed,

        /// <summary>
        /// The item is returned. The funds are returned if the recipient hasn't claimed them in 30 days.
        /// </summary>
        Returned,

        /// <summary>
        /// The item is on hold.
        /// </summary>
        Onhold,

        /// <summary>
        /// The item is blocked.
        /// </summary>
        Blocked,

        /// <summary>
        /// It is not possible for the CANCELLED state to occur if the sender is solely using the API to send Payouts.
        /// This status is an edge-case if a sender uses both the MassPay web upload and the Payouts API, cancels the
        /// web upload, and then uses the API to find the batch/items. In this case, CANCELLED status is possible.
        /// </summary>
        Cancelled

    }
}
